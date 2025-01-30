export const usdtPaymentsTransactionHashNodeJsExpress = `const express = require('express');
const app = express();

app.get('/payment', (req, res) => {
  const order_id = req.query.order_id;
  const txhash = req.query.txhash;
  
  // Save the txhash to the database, linked to the order.
  // Your logic goes here..

  // Monitor Transaction
  
  res.redirect('https://example.com/order_received');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
`;
