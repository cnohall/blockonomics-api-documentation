export const usdtPaymentsMonitorTransactionPython = `import requests
url = 'https://blockonomics.co/api/monitor_tx'
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={"txhash":txhash,"crypto":"USDT","match_callback":"MATCH_CALLBACK","testnet":1})
`;
