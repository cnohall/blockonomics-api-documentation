export const usdtPaymentsMonitorTransactionCurl = `curl -X POST 'https://blockonomics.co/api/monitor_tx' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"txhash":"0x712f876339d877e7558f25b4c0b684c5e1d1a11472d407a175c231894b280714","crypto":"USDT","match_callback":"MATCH_CALLBACK","testnet":1}'
`;
