---
sidebar_position: 3
---

# Transaction Detail

Returns detail of input transaction id. A list of transaction inputs and outputs are returned. Time is the received unix timestamp of transaction, value is the amount of transaction input/output in satoshis, fee is the transaction fees in satoshis, size is the transaction size in bytes. For unconfirmed transactions an <b>RBF</b> attribute may be returned.

<i>rbf</i> of value 1 means <i>Opted-In RBF signalling</i>.<br/>
<i>rbf</i> of value 2 means <i>rbf</i> due to inherited signalling (ancestor transaction has RBF flag).

### Definition

```http
GET https://www.blockonomics.co/api/tx_detail?txid=<txid>
```

### Example Request

```bash
curl https://www.blockonomics.co/api/tx_detail?txid=c4978bfc9b4cd632fb37eb5f69c7c686ae364d9cb1b32ec01c0f8bae72530a4e
```

### Example Response

```json
{
  "status": "Confirmed",
  "fee": 100000,
  "vout": [
    { "value": 10000, "address": "1FnQjXQc8F6jyjF8L92yLpnMhSWpw8t8jo" },
    { "value": 4824404598, "address": "1AEgdWjJrEbroURgWmPrXkFdzxGxdF7c4G" },
    { "value": 899950000, "address": "33wBKF7y471qK9zuWQDHbesnGX8JL5YCbW" }
  ],
  "vin": [
    { "value": 5724464598, "address": "1AEgdWjJrEbroURgWmPrXkFdzxGxdF7c4G" }
  ],
  "time": 1577166893,
  "size": 257
}
```
