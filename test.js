// let accountValue = 0;

// function setInitialAccount() {
//   const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//   if (isNaN(initialAccountValue)) {
//     alert('Please enter a valid number for the initial account value.');
//     return;
//   }

//   accountValue = initialAccountValue;
//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function updateAccount(type, subaccountType = null) {
//   const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//   if (isNaN(inputValue)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   switch (type) {
//     case 'expense':
//     case 'liability':
//       accountValue -= inputValue;
//       break;
//     case 'income':
//       accountValue += inputValue;
//       break;
//     case 'assets':
//       accountValue += inputValue;
//       break;
//     default:
//       break;
//   }

//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }
// // let accountValue = 0;
// let transactions = [];

// function setInitialAccount() {
//   const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//   if (isNaN(initialAccountValue)) {
//     alert('Please enter a valid number for the initial account value.');
//     return;
//   }

//   accountValue = initialAccountValue;
//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function updateAccount(type, subaccountType = null) {
//   const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//   if (isNaN(inputValue)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   let transactionType;
//   switch (type) {
//     case 'expense':
//       accountValue -= inputValue;
//       transactionType = 'Expense';
//       break;
//     case 'liability':
//       accountValue -= inputValue;
//       transactionType = 'Liability';
//       break;
//     case 'income':
//       accountValue += inputValue;
//       transactionType = 'Income';
//       break;
//     case 'assets':
//       accountValue += inputValue;
//       transactionType = 'Assets';
//       break;
//     default:
//       break;
//   }

//   // Log the transaction
//   logTransaction(transactionType, inputValue);

//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function logTransaction(type, amount) {
//   const date = new Date().toLocaleString();
//   const transaction = `${type}: ${amount.toFixed(2)} on ${date}`;
//   transactions.unshift(transaction); // Add the new transaction to the beginning of the array
//   updateTransactionList();
// }

// function updateTransactionList() {
//   const transactionList = document.getElementById('transactionList');
//   transactionList.innerHTML = ''; // Clear existing content

//   transactions.forEach(transaction => {
//     const listItem = document.createElement('li');
//     listItem.textContent = transaction;
//     transactionList.appendChild(listItem);
//   });
// }






// let accountValue = 0;
// let transactions = [];

// function setInitialAccount() {
//   const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//   if (isNaN(initialAccountValue)) {
//     alert('Please enter a valid number for the initial account value.');
//     return;
//   }

//   accountValue = initialAccountValue;
//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function updateAccount(type, subaccountType = null) {
//   const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//   if (isNaN(inputValue)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   let transactionType;
//   switch (type) {
//     case 'expense':
//       accountValue -= inputValue;
//       transactionType = 'Expense';
//       break;
//     case 'liability':
//       accountValue -= inputValue;
//       transactionType = 'Liability';
//       break;
//     case 'income':
//       accountValue += inputValue;
//       transactionType = subaccountType ? subaccountType : 'Income';
//       break;
//     case 'assets':
//       accountValue += inputValue;
//       transactionType = 'Assets';
//       break;
//     default:
//       break;
//   }

//   // Log the transaction
//   logTransaction(transactionType, inputValue);

//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function logTransaction(type, amount) {
//   const date = new Date().toLocaleString();
//   const transaction = `${type}: ${amount.toFixed(2)} on ${date}`;
//   transactions.unshift(transaction); // Add the new transaction to the beginning of the array
//   updateTransactionList();
// }

// function updateTransactionList() {
//   const transactionList = document.getElementById('transactionList');
//   transactionList.innerHTML = ''; // Clear existing content

//   transactions.forEach(transaction => {
//     const listItem = document.createElement('li');
//     listItem.textContent = transaction;
//     transactionList.appendChild(listItem);
//   });
// }




// let accountValue = 0;
// let transactions = [];

// function setInitialAccount() {
//   const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//   if (isNaN(initialAccountValue)) {
//     alert('Please enter a valid number for the initial account value.');
//     return;
//   }

//   accountValue = initialAccountValue;
//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function updateAccount(type, subaccountType = null) {
//   const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//   if (isNaN(inputValue)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   let transactionType;
//   switch (type) {
//     case 'expense':
//       accountValue -= inputValue;
//       transactionType = 'Expense';
//       break;
//     case 'liability':
//       accountValue -= inputValue;
//       transactionType = 'Liability';
//       break;
//     case 'income':
//       accountValue += inputValue;
//       transactionType = subaccountType ? subaccountType : 'Income';
//       break;
//     case 'assets':
//       accountValue += inputValue;
//       transactionType = 'Assets';
//       break;
//     default:
//       break;
//   }

//   // Log the transaction
//   logTransaction(transactionType, inputValue);

//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function logTransaction(type, amount) {
//   const date = new Date().toLocaleString();
//   const transactionText = `${type}: ${amount.toFixed(2)}`;
//   const transaction = document.createElement('li');

//   // Set styles based on the transaction type
//   if (type === 'Expense' || type === 'Liability') {
//     transaction.style.color = 'red';
//     transaction.textContent = `-${transactionText} on ${date}`;
//   } else {
//     transaction.style.color = 'green';
//     transaction.textContent = `+${transactionText} on ${date}`;
//   }

//   transactions.unshift(transaction); // Add the new transaction to the beginning of the array
//   updateTransactionList();
// }

// function updateTransactionList() {
//   const transactionList = document.getElementById('transactionList');
//   transactionList.innerHTML = ''; // Clear existing content

//   transactions.forEach(transaction => {
//     transactionList.appendChild(transaction);
//   });
// }





// function logTransaction(type, amount) {
//   const date = new Date().toLocaleString();
//   const transaction = document.createElement('li');

//   // Set styles based on the transaction type
//   if (type === 'Expense' || type === 'Liability') {
//     transaction.style.color = 'red';
//     transaction.textContent = ` -${amount.toFixed(2)} ${type} on ${date}`;
//   } else {
//     transaction.style.color = 'green';
//     transaction.textContent = ` +${amount.toFixed(2)} ${type} on ${date}`;
//   }

//   transactions.unshift(transaction); // Add the new transaction to the beginning of the array
//   updateTransactionList();
// }
// function logTransaction(type, amount) {
//     const date = new Date().toLocaleString();
//     const transaction = document.createElement('li');
  
//     // Set styles based on the transaction type
//     if (type === 'Expense' || type === 'Liability') {
//       transaction.className = 'red';
//       transaction.textContent = ` -${amount.toFixed(2)} ${type} on ${date}`;
//     } else {
//       transaction.className = 'green';
//       transaction.textContent = ` +${amount.toFixed(2)} ${type} on ${date}`;
//     }
  
//     transactions.unshift(transaction); // Add the new transaction to the beginning of the array
//     updateTransactionList();
//   }

// function logTransaction(type, amount) {
//     const date = new Date().toLocaleString();
//     const transactionTable = document.getElementById('transactionList');
  
//     // Create a new table row
//     const transactionRow = document.createElement('tr');
  
//     // Create cells for each part of the transaction
//     const typeCell = document.createElement('td');
//     const amountCell = document.createElement('td');
//     const dateCell = document.createElement('td');
  
//     // Set styles based on the transaction type
//     if (type === 'Expense' || type === 'Liability') {
//       amountCell.style.color = 'red';
//       amountCell.textContent = `-$${amount.toFixed(2)}`;
//     } else {
//       amountCell.style.color = 'green';
//       amountCell.textContent = `+$${amount.toFixed(2)}`;
//     }
  
//     typeCell.textContent = type;
//     dateCell.textContent = date;
  
//     // Append cells to the row
//     transactionRow.appendChild(typeCell);
//     transactionRow.appendChild(amountCell);
//     transactionRow.appendChild(dateCell);
  
//     // Append the row to the table
//     transactionTable.appendChild(transactionRow);
  
//     transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array
//   }


// let accountValue = 0;
// let transactions = [];

// function setInitialAccount() {
//   const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//   if (isNaN(initialAccountValue)) {
//     alert('Please enter a valid number for the initial account value.');
//     return;
//   }

//   accountValue = initialAccountValue;
//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function updateAccount(type, subaccountType = null) {
//   const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//   if (isNaN(inputValue)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   let transactionType;
//   switch (type) {
//     case 'expense':
//       accountValue -= inputValue;
//       transactionType = 'Expense';
//       break;
//     case 'liability':
//       accountValue -= inputValue;
//       transactionType = 'Liability';
//       break;
//     case 'income':
//       accountValue += inputValue;
//       transactionType = subaccountType ? subaccountType : 'Income';
//       break;
//     case 'assets':
//       accountValue += inputValue;
//       transactionType = 'Assets';
//       break;
//     default:
//       break;
//   }

//   // Log the transaction
//   logTransaction(transactionType, inputValue);

//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function logTransaction(type, amount) {
//     const date = new Date().toLocaleString();
//     const transactionTable = document.getElementById('transactionList');
  
//     // Create a new table row
//     const transactionRow = document.createElement('tr');
  
//     // Create a single cell for the transaction information
//     const transactionCell = document.createElement('td');
  
//     // Set styles based on the transaction type
//     if (type === 'Expense' || type === 'Liability') {
//       transactionCell.style.color = 'red';
//       transactionCell.textContent = `-${amount.toFixed(2)} Expense on ${date}`;
//     } else {
//       transactionCell.style.color = 'green';
//       transactionCell.textContent = `+${amount.toFixed(2)} ${type} on ${date}`;
//     }
  
//     // Append the cell to the row
//     transactionRow.appendChild(transactionCell);
  
//     // Append the row to the table
//     transactionTable.appendChild(transactionRow);
  
//     transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array
//   }
  
  


// function updateTransactionList() {
//   const transactionList = document.getElementById('transactionList');
//   transactionList.innerHTML = ''; // Clear existing content

//   transactions.forEach(transaction => {
//     transactionList.appendChild(transaction);
//   });
// }



// MAIN---------------------------------------------------------------------------------------------------------------------

// let accountValue = 0;
// let transactions = [];

// function setInitialAccount() {
//   const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

//   if (isNaN(initialAccountValue)) {
//     alert('Please enter a valid number for the initial account value.');
//     return;
//   }

//   accountValue = initialAccountValue;
//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function updateAccount(type, subaccountType = null) {
//   const inputValue = parseFloat(document.getElementById(`${subaccountType ? subaccountType : type}Input`).value);

//   if (isNaN(inputValue)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   let transactionType;
//   switch (type) {
//     case 'expense':
//       accountValue -= inputValue;
//       transactionType = 'Expense';
//       break;
//     case 'liability':
//       accountValue -= inputValue;
//       transactionType = 'Liability';
//       break;
//     case 'income':
//       accountValue += inputValue;
//       transactionType = subaccountType ? subaccountType : 'Income';
//       break;
//     case 'assets':
//       accountValue += inputValue;
//       transactionType = 'Assets';
//       break;
//     default:
//       break;
//   }

//   // Log the transaction
//   logTransaction(transactionType, inputValue);

//   document.getElementById('accountValue').innerText = accountValue.toFixed(2);
// }

// function logTransaction(type, amount) {
//   const date = new Date().toLocaleString();
//   const transactionTableBody = document.querySelector('#transactionList tbody');

//   // Create a new table row
//   const transactionRow = document.createElement('tr');

//   // Create cells for each part of the transaction
//   const typeCell = document.createElement('td');
//   const amountCell = document.createElement('td');
//   const dateCell = document.createElement('td');

//   // Set styles based on the transaction type
//   if (type === 'Expense' || type === 'Liability') {
//     amountCell.style.color = 'red';
//     amountCell.textContent = `-$${amount.toFixed(2)}`;
//   } else {
//     amountCell.style.color = 'green';
//     amountCell.textContent = `+$${amount.toFixed(2)}`;
//   }

//   typeCell.textContent = type;
//   dateCell.textContent = date;

//   // Append cells to the row
//   transactionRow.appendChild(typeCell);
//   transactionRow.appendChild(amountCell);
//   transactionRow.appendChild(dateCell);

//   // Append the row to the table body
//   transactionTableBody.appendChild(transactionRow);

//   transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array
// }


// Import Firebase modules
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
// import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js';

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
//   };



// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);



// Import Firebase modules
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


let accountValue = 0;
let transactions = [];


function setInitialAccount() {
    const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);
  
    if (isNaN(initialAccountValue)) {
      alert('Please enter a valid number for the initial account value.');
      return;
    }
  
    accountValue = initialAccountValue;
    document.getElementById('accountValue').innerText = accountValue.toFixed(2);
  
    // Push initial account value to Firebase
    set(ref(database, 'account'), {
      value: accountValue
    });
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
}

function logTransaction(type, amount) {
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

  typeCell.textContent = type;
  dateCell.textContent = date;

  // Append cells to the row
  transactionRow.appendChild(typeCell);
  transactionRow.appendChild(amountCell);
  transactionRow.appendChild(dateCell);

  // Append the row to the table body
  transactionTableBody.appendChild(transactionRow);

  transactions.unshift(transactionRow); // Add the new transaction to the beginning of the array


  // Push transaction data to Firebase
  const newTransactionRef = push(ref(database, 'transactions'), {
    type,
    amount: type === 'Expense' || type === 'Liability' ? -amount : amount,
    date
  });
}
