---
sidebar_position: 4
---

# Payment Notification

Use this to get real-time notifications of payments to your bitcoin address (suitable for client side/browser notification). 

### Parameters
- `addr`: Your bitcoin address.

A websocket message is returned on successful payment containing the following fields:

- `status`: The status of the transaction.
  - `0`: Unconfirmed
  - `1`: Partially Confirmed
  - `2`: Confirmed
- `timestamp`: The Unix timestamp of the transaction.
- `value`: The received payment amount in satoshis.
- `txid`: The ID of the paying transaction.

### Definition
Websocket connection to `wss://www.blockonomics.co/payment/<addr>`

### Example Request
```javascript
var wsuri = "wss://www.blockonomics.co/payment/189CEMECgP36iXpCKQoBbRQn3dTCUPi5dm";
```
### Example Response
```json
{
  "status": 0,
  "timestamp": 1470371749,
  "value": 167377096,
  "txid": "aed36253434b90e45ded86ccf1729f5d2acd78bd7665c54e62d5000035a8f6d8"
}
```