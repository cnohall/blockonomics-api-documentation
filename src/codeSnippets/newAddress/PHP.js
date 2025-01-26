export const newAddressPHP = `<?php
$api_key = 'INSERT_API_KEY_HERE';
$url = 'https://www.blockonomics.co/api/new_address';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
$header = "Authorization: Bearer " . $api_key;
$headers = array();
$headers[] = $header;
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$contents = curl_exec($ch);
if (curl_errno($ch)) {
    echo "Error:" . curl_error($ch);
}
$responseObj = json_decode($contents);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
if ($status == 200) {
    echo $responseObj->address;
} else {
    echo "ERROR: " . $status . ' ' . $responseObj->message;
}
?>`;
