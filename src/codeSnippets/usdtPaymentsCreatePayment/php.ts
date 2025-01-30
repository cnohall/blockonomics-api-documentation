export const usdtPaymentsCreatePaymentPhp = `<?php
$url = 'https://blockonomics.co/api/new_address?match_callback=MATCH_CALLBACK&crypto=USDT';
$headers = [
    'Authorization: Bearer YOUR_API_KEY'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');


$response = curl_exec($ch);
curl_close($ch);

echo $response;
`;
