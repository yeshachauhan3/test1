let accountValue = 0;

function setInitialAccount() {
  const initialAccountValue = parseFloat(document.getElementById('initialAccountInput').value);

  if (isNaN(initialAccountValue)) {
    alert('Please enter a valid number for the initial account value.');
    return;
  }

  accountValue = initialAccountValue;
  document.getElementById('accountValue').innerText = accountValue.toFixed(2);
}

function updateAccount(type) {
  const inputValue = parseFloat(document.getElementById(`${type}Input`).value);

  if (isNaN(inputValue)) {
    alert('Please enter a valid number.');
    return;
  }

  switch (type) {
    case 'expense':
    case 'liability':
      accountValue -= inputValue;
      break;
    case 'equity':
    case 'assets':
      accountValue += inputValue;
      break;
    default:
      break;
  }

  document.getElementById('accountValue').innerText = accountValue.toFixed(2);
}
