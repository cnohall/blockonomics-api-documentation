export const usdtPaymentsCreatePaymentPython = `import requests
url = 'https://blockonomics.co/api/new_address?match_callback=MATCH_CALLBACK&crypto=USDT'
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.post(url, headers=headers)
`;