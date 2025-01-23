---
sidebar_position: 2
---

# History

Returns the transaction history of multiple Bitcoin addresses/xpubs by considering them part of the same wallet. For each transaction, the following parameters are returned:

- unix timestamp
- txid
- net value transacted from the wallet in satoshis
- subset of address involved in the transaction

Transactions are sorted by latest time, with a maximum of 200 transactions returned. Pending transactions (those having less than 2 confirmations) are returned in the pending dict with <i>status</i>.

### Status Codes

- 0 - Unconfirmed
- 1 - Partially Confirmed

### Definition

This request requires an <b>API Key</b> set in the request header

### Endpoint:

```http
POST https://www.blockonomics.co/api/searchhistory
```

### Request Body:

```json
{
  "addr": "<Whitespace separated list of bitcoin addresses/xpubs>"
}
```

### Example Request

```bash
curl -d '{"addr":"1JJ5taVeiHcD6DXNkLLfocbHcE9Nzio1qV, 13A1W4jLPP75pzvn2qJ5KyyqG3qPSpb9jM"}' \
-H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU' \
https://www.blockonomics.co/api/searchhistory

```
