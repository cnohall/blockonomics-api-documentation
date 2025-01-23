---
sidebar_position: 2
---

# Balance

## API Response

This API returns the balance and the unconfirmed amount (amount waiting for 2 confirmations) of multiple addresses or xpubs. The balance is reported in units of satoshis.

### Authentication

This request requires an **API Key** to be set in the request header for authorization.

### Response Attributes

- **balance**: Current balance of the address or xpub, in satoshis.
- **unconfirmed**: Amount waiting for 2 confirmations, in satoshis.

## Definition

### Endpoint:

```http
POST https://www.blockonomics.co/api/balance
```

### Request Body:

```json
{
  "addr": "<Whitespace separated list of bitcoin addresses/xpubs>"
}
```

## Example Request

Here's how you can send a `POST` request with your API Key:

```sh
curl -d '{"addr":"1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp 1dice97ECuByXAvqXpaYzSaQuPVvrtmz6"}' \
-H 'Authorization: Bearer YOUR_API_KEY_HERE' \
https://www.blockonomics.co/api/balance
```

## Example Response

```json
{
  "response": [
    {
      "confirmed": 189412205,
      "addr": "1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp",
      "unconfirmed": 012211
    },
    {
      "confirmed": 746599881,
      "addr": "1dice97ECuByXAvqXpaYzSaQuPVvrtmz6",
      "unconfirmed": 0
    }
  ]
}
```
