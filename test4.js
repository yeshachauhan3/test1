// --new--
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7z34TH-Rl3kSm4rlAD1-LWZoPck4hJSo",
    authDomain: "expensetracker-824d7.firebaseapp.com",
    databaseURL: "https://expensetracker-824d7-default-rtdb.firebaseio.com",
    projectId: "expensetracker-824d7",
    storageBucket: "expensetracker-824d7.appspot.com",
    messagingSenderId: "1059147663902",
    appId: "1:1059147663902:web:5ff4ea3c0497f8df843c0f",
    measurementId: "G-S1KP4YN6ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("Script loaded!");

const auth = getAuth();

let currentUser;
let currentUserData;
// Listen for changes in user authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        currentUser = user;
        console.log('User is signed in:', user.uid);
        
        // Fetch the user's data when they sign in
        fetchUserData(user.uid);
    } else {
        // User is signed out
        currentUser = null;
        currentUserData = null; // Reset user data when signed out
        console.log('User is signed out');
    }
});
function fetchUserData(uid) {
    // Use the UID to construct the path for the user's data
    const userPath = `user/${uid}`;

    // Fetch the user's data from Firebase
    const userRef = ref(database, userPath);
    onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
            currentUserData = snapshot.val();
            console.log('User data:', currentUserData);
        } else {
            // Handle the case where user data doesn't exist
            console.log('User data does not exist');
        }
    });
}
let accountValue = 0;
let transactions = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('setInitialAccountButton').addEventListener('click', setInitialAccount);
    document.getElementById('expenseButton').addEventListener('click', () => updateAccount('expense'));
    document.getElementById('IncomeButton').addEventListener('click', () => updateAccount('income', 'Income'));
});

function setInitialAccount() {
    console.log("Setting initial account value...");
    const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

    if (isNaN(initialAccountValue)) {
        alert('Please enter a valid number for the initial account value.');
        return;
    }

    accountValue = initialAccountValue;
    document.getElementById('accountValue').innerText = accountValue.toFixed(2);

    // Push initial account value to Firebase
    updateMainAccountValue(currentUser?.displayName); // Pass the username if available
}

function updateAccount(type, subaccountType = null) {
    const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }

    let transactionType;
    switch (type) {
        case 'expense':
            accountValue -= inputValue;
            transactionType = 'Expense';
            break;

        case 'income':
            accountValue += inputValue;
            transactionType = subaccountType ? subaccountType : 'Income';
            break;

        default:
            break;
    }

    // Log the transaction
    logTransaction(currentUser?.displayName, transactionType, inputValue); // Pass the username if available

    document.getElementById('accountValue').innerText = accountValue.toFixed(2);

    // Update main account value in Firebase
    updateMainAccountValue(currentUser?.displayName); // Pass the username if available
}

function updateMainAccountValue(username) {
    // Check if a user is signed in
    if (currentUser && currentUserData) {
        const uid = currentUser.uid; // Use UID instead of username

        // Update main account value in Firebase
        set(ref(database, `user/${uid}/account`), {
            value: accountValue
        });
    } else {
        console.log('User not signed in');
    }
}

function logTransaction(uid, type, amount, subaccountType = null) {
    // Use the UID to construct the path for transactions
    const transactionPath = `user/${uid}/transactions`;

    const date = new Date().toLocaleString();
    const transactionTableBody = document.querySelector('#transactionList tbody');

    // Create a new table row
    const transactionRow = document.createElement('tr');

    // Create cells for each part of the transaction
    const typeCell = document.createElement('td');
    const amountCell = document.createElement('td');
    const dateCell = document.createElement('td');

    // Set styles based on the transaction type
    if (type === 'Expense') {
        amountCell.style.color = 'red';
        amountCell.textContent = `-$${amount.toFixed(2)}`;
    } else {
        amountCell.style.color = 'green';
        amountCell.textContent = `+$${amount.toFixed(2)}`;
    }

    // Display the subaccount type if available
    const displayType = subaccountType ? `${subaccountType} - ${type}` : type;
    typeCell.textContent = displayType;
    dateCell.textContent = date;

    // Append cells to the row
    transactionRow.appendChild(typeCell);
    transactionRow.appendChild(amountCell);
    transactionRow.appendChild(dateCell);

    // Append the row to the table body
    transactionTableBody.appendChild(transactionRow);

    transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array

    // Generate a custom key for the transaction
    const transactionKey = `${type}-${Date.now()}`;

    // Push transaction data to Firebase with the custom key
    const newTransactionRef = set(ref(database, `${transactionPath}/${transactionKey}`), {
        type: displayType,
        amount: type === 'Expense' ? -amount : amount,
        date
    });

    transactions.unshift({
        type: displayType,
        amount: type === 'Expense' ? -amount : amount,
        date
    });

    // Update main account value and transactions in Firebase
    updateMainAccountValue(uid);
}
