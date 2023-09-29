// Initialize variables
let depositTotal = 0;
let withdrawnAmount = 0;

// Function to update the display of the total amount
function updateTotal() {
    const totalAmount = depositTotal - withdrawnAmount;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

// Function to handle deposit
document.getElementById('depositBtn').addEventListener('click', function () {
    const depositValue = parseFloat(document.getElementById('depositValue').value);

    if (!isNaN(depositValue) && depositValue > 0) {
        depositTotal += depositValue;
        updateTotal();
        document.getElementById('depositTotal').textContent = depositTotal.toFixed(2);
    }

    // Clear the input field after deposit
    document.getElementById('depositValue').value = '';
});

// Function to handle withdrawal
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawValue = parseFloat(document.getElementById('withdrawValue').value);

    if (!isNaN(withdrawValue) && withdrawValue > 0 && (depositTotal - withdrawnAmount) >= withdrawValue) {
        withdrawnAmount += withdrawValue;
        updateTotal();
        document.getElementById('withdrawnAmount').textContent = withdrawnAmount.toFixed(2);
    }

    // Clear the input field after withdrawal
    document.getElementById('withdrawValue').value = '';
});

// Initial update of the total amount
updateTotal();
