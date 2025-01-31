export const usdtPaymentsMonitorTransactionNodeJs = `fetch('https://blockonomics.co/api/monitor_tx', {
  method: 'POST',
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({"txhash":txhash,"crypto":"USDT","match_callback":"MATCH_CALLBACK","testnet":1})
});
`;
