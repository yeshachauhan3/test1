// Sample data
const currentAssets = {
    transactions: []
};

// Function to open the transaction form
function openTransactionForm() {
    document.getElementById("transaction-modal").style.display = "block";
}

// Function to close the transaction form
function closeTransactionForm() {
    document.getElementById("transaction-modal").style.display = "none";
}

// Function to submit a new transaction
function submitTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const transactionType = document.getElementById("transaction-type").value;
    const note = document.getElementById("note").value;
    const timestamp = new Date().toLocaleString();

    const transaction = {
        description,
        amount: transactionType === "withdrawal" ? -amount : amount,
        note,
        timestamp
    };

    currentAssets.transactions.push(transaction);
    updateTransactionList();
    closeTransactionForm();
}

// Function to update the transaction list
function updateTransactionList() {
    const transactionList = document.getElementById("transaction-list");
    transactionList.innerHTML = "";

    currentAssets.transactions.forEach(transaction => {
        const transactionItem = document.createElement("div");
        transactionItem.className = "transaction-item";
        transactionItem.innerHTML = `<p>${transaction.description}</p><p>${transaction.amount}</p><p>${transaction.timestamp}</p>`;
        transactionList.appendChild(transactionItem);
    });
}
