// Import Firebase modules
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
// import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js';

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB7z34TH-Rl3kSm4rlAD1-LWZoPck4hJSo",
//     authDomain: "expensetracker-824d7.firebaseapp.com",
//     databaseURL: "https://expensetracker-824d7-default-rtdb.firebaseio.com",
//     projectId: "expensetracker-824d7",
//     storageBucket: "expensetracker-824d7.appspot.com",
//     messagingSenderId: "1059147663902",
//     appId: "1:1059147663902:web:5ff4ea3c0497f8df843c0f",
//     measurementId: "G-S1KP4YN6ZB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// let accountValue = 0;
// let transactions = [];

// document.getElementById('setInitialAccountButton').addEventListener('click', setInitialAccount);

// function setInitialAccount() {
//     const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//     if (isNaN(initialAccountValue)) {
//         alert('Please enter a valid number for the initial account value.');
//         return;
//     }

//     accountValue = initialAccountValue;
//     document.getElementById('accountValue').innerText = accountValue.toFixed(2);

//     // Push initial account value to Firebase
//     set(ref(database, 'account'), {
//         value: accountValue
//     });
// }

// function updateAccount(type, subaccountType = null) {
//     const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//     if (isNaN(inputValue)) {
//         alert('Please enter a valid number.');
//         return;
//     }

//     let transactionType;
//     switch (type) {
//         case 'expense':
//             accountValue -= inputValue;
//             transactionType = 'Expense';
//             break;
//         case 'liability':
//             accountValue -= inputValue;
//             transactionType = 'Liability';
//             break;
//         case 'income':
//             accountValue += inputValue;
//             transactionType = subaccountType ? subaccountType : 'Income';
//             break;
//         case 'assets':
//             accountValue += inputValue;
//             transactionType = 'Assets';
//             break;
//         default:
//             break;
//     }

//     // Log the transaction
//     logTransaction(transactionType, inputValue);

//     document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function logTransaction(type, amount) {
//     const date = new Date().toLocaleString();
//     const transactionTableBody = document.querySelector('#transactionList tbody');

//     // Create a new table row
//     const transactionRow = document.createElement('tr');

//     // Create cells for each part of the transaction
//     const typeCell = document.createElement('td');
//     const amountCell = document.createElement('td');
//     const dateCell = document.createElement('td');

//     // Set styles based on the transaction type
//     if (type === 'Expense' || type === 'Liability') {
//         amountCell.style.color = 'red';
//         amountCell.textContent = `-$${amount.toFixed(2)}`;
//     } else {
//         amountCell.style.color = 'green';
//         amountCell.textContent = `+$${amount.toFixed(2)}`;
//     }

//     typeCell.textContent = type;
//     dateCell.textContent = date;

//     // Append cells to the row
//     transactionRow.appendChild(typeCell);
//     transactionRow.appendChild(amountCell);
//     transactionRow.appendChild(dateCell);

//     // Append the row to the table body
//     transactionTableBody.appendChild(transactionRow);

//     transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array

//     // Push transaction data to Firebase
//     const newTransactionRef = push(ref(database, 'transactions'), {
//         type,
//         amount: type === 'Expense' || type === 'Liability' ? -amount : amount,
//         date
//     });
// }






// --new--
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js';

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



let accountValue = 0;
let transactions = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('setInitialAccountButton').addEventListener('click', setInitialAccount);
    document.getElementById('expenseButton').addEventListener('click', () => updateAccount('expense'));
    document.getElementById('liabilityButton').addEventListener('click', () => updateAccount('liability'));
    document.getElementById('bonusButton').addEventListener('click', () => updateAccount('income', 'bonus'));
    document.getElementById('giftsReceivedButton').addEventListener('click', () => updateAccount('income', 'giftsReceived'));
    document.getElementById('otherIncomeButton').addEventListener('click', () => updateAccount('income', 'otherIncome'));
    document.getElementById('interestIncomeButton').addEventListener('click', () => updateAccount('income', 'interestIncome'));
    document.getElementById('salaryButton').addEventListener('click', () => updateAccount('income', 'salary'));
    document.getElementById('assetsButton').addEventListener('click', () => updateAccount('assets'));
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
    updateMainAccountValue();
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
        case 'liability':
            accountValue -= inputValue;
            transactionType = 'Liability';
            break;
        case 'income':
            accountValue += inputValue;
            transactionType = subaccountType ? subaccountType : 'Income';
            break;
        case 'assets':
            accountValue += inputValue;
            transactionType = 'Assets';
            break;
        default:
            break;
    }

    // Log the transaction
    logTransaction(transactionType, inputValue);

    document.getElementById('accountValue').innerText = accountValue.toFixed(2);

    // Update main account value in Firebase
    updateMainAccountValue();
}

function updateMainAccountValue() {
    // Update main account value in Firebase
    set(ref(database, 'account'), {
        value: accountValue
    });
}


function logTransaction(type, amount, subaccountType = null) {
    const date = new Date().toLocaleString();
    const transactionTableBody = document.querySelector('#transactionList tbody');

    // Create a new table row
    const transactionRow = document.createElement('tr');

    // Create cells for each part of the transaction
    const typeCell = document.createElement('td');
    const amountCell = document.createElement('td');
    const dateCell = document.createElement('td');

    // Set styles based on the transaction type
    if (type === 'Expense' || type === 'Liability') {
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
    const newTransactionRef = set(ref(database, `transactions/${transactionKey}`), {
        type: displayType,
        amount: type === 'Expense' || type === 'Liability' ? -amount : amount,
        date
    });
}




// function logTransaction(type, amount) {
//     const date = new Date().toLocaleString();
//     const transactionTableBody = document.querySelector('#transactionList tbody');

//     // Create a new table row
//     const transactionRow = document.createElement('tr');

//     // Create cells for each part of the transaction
//     const typeCell = document.createElement('td');
//     const amountCell = document.createElement('td');
//     const dateCell = document.createElement('td');

//     // Set styles based on the transaction type
//     if (type === 'Expense' || type === 'Liability') {
//         amountCell.style.color = 'red';
//         amountCell.textContent = `-$${amount.toFixed(2)}`;
//     } else {
//         amountCell.style.color = 'green';
//         amountCell.textContent = `+$${amount.toFixed(2)}`;
//     }

//     typeCell.textContent = type;
//     dateCell.textContent = date;

//     // Append cells to the row
//     transactionRow.appendChild(typeCell);
//     transactionRow.appendChild(amountCell);
//     transactionRow.appendChild(dateCell);

//     // Append the row to the table body
//     transactionTableBody.appendChild(transactionRow);

//     transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array

//     // Push transaction data to Firebase
//     const newTransactionRef = push(ref(database, 'transactions'), {
//         type,
//         amount: type === 'Expense' || type === 'Liability' ? -amount : amount,
//         date
//     });
// }

// function logTransaction(type, amount, subaccountType = null) {
//     const date = new Date().toLocaleString();
//     const transactionTableBody = document.querySelector('#transactionList tbody');

//     // Create a new table row
//     const transactionRow = document.createElement('tr');

//     // Create cells for each part of the transaction
//     const typeCell = document.createElement('td');
//     const amountCell = document.createElement('td');
//     const dateCell = document.createElement('td');

//     // Set styles based on the transaction type
//     if (type === 'Expense' || type === 'Liability') {
//         amountCell.style.color = 'red';
//         amountCell.textContent = `-$${amount.toFixed(2)}`;
//     } else {
//         amountCell.style.color = 'green';
//         amountCell.textContent = `+$${amount.toFixed(2)}`;
//     }

//     // Display the subaccount type if available
//     const displayType = subaccountType ? `${subaccountType} - ${type}` : type;
//     typeCell.textContent = displayType;
//     dateCell.textContent = date;

//     // Append cells to the row
//     transactionRow.appendChild(typeCell);
//     transactionRow.appendChild(amountCell);
//     transactionRow.appendChild(dateCell);

//     // Append the row to the table body
//     transactionTableBody.appendChild(transactionRow);

//     transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array

//     // Push transaction data to Firebase
//     const newTransactionRef = push(ref(database, 'transactions'), {
//         type: displayType,
//         amount: type === 'Expense' || type === 'Liability' ? -amount : amount,
//         date
//     });
// }
