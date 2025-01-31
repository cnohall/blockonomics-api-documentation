export const usdtPaymentsMonitorTransactionPhp = `<?php // payment.php
$url = 'https://blockonomics.co/api/monitor_tx';
$headers = [
  'Authorization: Bearer YOUR_API_KEY',
  'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode({"txhash":$txhash,"crypto":"USDT","match_callback":"MATCH_CALLBACK","testnet":1}));

$response = curl_exec($ch);
curl_close($ch);
`;
