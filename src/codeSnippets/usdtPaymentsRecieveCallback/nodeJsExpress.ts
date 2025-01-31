export const usdtPaymentsRecieveCallbackNodeJsExpress = `const express = require('express');
const app = express();

// Configuration
const SECRET = "YOUR_SECRET";
const EXPECTED_AMOUNT = 10;

app.get('/callback', (req, res) => {
    const { txid, value, status, addr, crypto, testnet, secret } = req.query;

    // Security: Match the secret
    if (secret !== SECRET) {
        return res.status(403).send('Invalid secret');
    }

    // Validation: Only accept confirmed transactions
    if (parseInt(status) !== 2) {
        return res.status(400).send('Transaction not confirmed');
    }

    // Validation: Only accept mainnet transactions
    if (parseInt(testnet) !== 0) {
        return res.status(400).send('Transaction from testnet is not allowed');
    }

    // Validation: Amount sent matches the expected amount
    const sent_amount = parseFloat(value) / 1e6;
    if (EXPECTED_AMOUNT > sent_amount) {
        return res.status(400).send('Insufficient amount');
    }

    // Save the payment information and update the order status
    // Your logic for saving payment info and updating order status goes here
    
    res.send('Payment processed successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));
`;
