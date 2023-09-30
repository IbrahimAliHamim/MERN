
const depositButton = document.getElementById('diposit');
depositButton.addEventListener('click', function () {
    // Get deposit input value
    const depositInput = document.getElementById('dipositValue');
    const depositAmount = parseFloat(depositInput.value);

    // Check if the input is a valid number
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid positive number for deposit.");
        depositInput.value = '';
        return;
    }

    // Get current deposit total
    const currentDeposit = document.getElementById('DipositTotal');
    const currentDepositAmount = parseFloat(currentDeposit.innerText);

    // Calculate new deposit total
    const newDepositTotal = currentDepositAmount + depositAmount;

    // Update the deposit total
    currentDeposit.innerText = newDepositTotal.toFixed(2);

    // Update the total balance
    const totalBalance = document.getElementById('totalValue');
    const totalBalanceAmount = parseFloat(totalBalance.innerText);
    const newTotalBalance = totalBalanceAmount + depositAmount;
    totalBalance.innerText = newTotalBalance.toFixed(2);

    // Check for alert conditions (every 100 or thousand)
    if (newTotalBalance % 100 === 0 || newTotalBalance % 1000 === 0) {
        alert(`You've reached ${newTotalBalance} in total deposits!`);
    }

    // Clear the input field
    depositInput.value = '';
});

const withdrawButton = document.getElementById('withdraw');
withdrawButton.addEventListener('click', function () {
    // Get withdrawal input value
    const withdrawInput = document.getElementById('WithdrawValue');
    const withdrawAmount = parseFloat(withdrawInput.value);

    // Check if the input is a valid number
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid positive number for withdrawal.");
        withdrawInput.value = '';
        return;
    }

    // Get current withdrawal total
    const currentWithdrawal = document.getElementById('withdrawMain');
    const currentWithdrawalAmount = parseFloat(currentWithdrawal.innerText);

    // Calculate new withdrawal total
    const newWithdrawalTotal = currentWithdrawalAmount + withdrawAmount;

    // Update the withdrawal total
    currentWithdrawal.innerText = newWithdrawalTotal.toFixed(2);

    // Update the total balance
    const totalBalance = document.getElementById('totalValue');
    const totalBalanceAmount = parseFloat(totalBalance.innerText);
    
    // Ensure the total doesn't go below 0
    const newTotalBalance = Math.max(totalBalanceAmount - withdrawAmount, 0);
    
    // Update the total balance
    totalBalance.innerText = newTotalBalance.toFixed(2);

    // Check for alert conditions (total less than 5)
    if (newTotalBalance < 5) {
        alert("Warning: Total balance is less than 5!");
    }

    // Clear the input field
    withdrawInput.value = '';
});

