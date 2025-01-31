export const usdtPaymentsRecieveCallbackPhp = `<?php // callback.php
// Configuration
$secret = 'YOUR_SECRET';
$expected_amount = 10;

// Get parameters from the request
$txid = $_GET['txid'] ?? null;
$value = $_GET['value'] ?? null;
$status = $_GET['status'] ?? null;
$addr = $_GET['addr'] ?? null;
$crypto = $_GET['crypto'] ?? null;
$testnet = $_GET['testnet'] ?? null;
$received_secret = $_GET['secret'] ?? null;

// Security: Match the secret
if ($received_secret !== $secret) {
    exit('Invalid secret');
}

// Validation: Only accept confirmed transactions
if ($status != 2) {
    exit('Transaction not confirmed');
}

// Validation: Only accept mainnet transactions
if ($testnet != 0) {
    exit('Transaction from testnet is not allowed');
}

// Validation: Amount sent matches the expected amount
$sent_amount = $value / 1e6;
if ($expected_amount > $sent_amount) {
    exit('Insufficient amount');
}

// Save the payment information and update the order status
// Your logic for saving payment info and updating order status goes here
?>
`;
