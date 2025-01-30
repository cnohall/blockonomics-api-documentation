export const usdtPaymentsCreatePaymentNodeJs = `fetch('https://blockonomics.co/api/new_address?match_callback=MATCH_CALLBACK&crypto=USDT', {
    method: 'POST',
    headers: { "Authorization": "Bearer YOUR_API_KEY" }
});
`;
