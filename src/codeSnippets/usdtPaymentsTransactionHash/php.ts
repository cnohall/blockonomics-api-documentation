export const usdtPaymentsTransactionHashPhp = `<?php // payment.php
$order_id = $_GET['order_id'];
$txhash = $_GET['txhash'];

// Save the txhash to the database, linked to the order.
// Your logic goes here..

// Monitor Transaction

// Redirect user to the Order Received page
header("Location: https://example.com/order_received.php");
die();
`;
