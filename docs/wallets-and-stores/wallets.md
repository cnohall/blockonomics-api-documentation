---
sidebar_position: 1
---

# Wallets

You can work with your wallets in Blockonomics with the Wallets API, including creating, retrieving, updating & deleting. In GET request, you can use `balance=true` to retrieve wallet balance as well.

You can expect a standardized wallet object working with wallet endpoints:

- **id**: Unique identifier of the wallet
- **name**: Given name
- **emailid**: Email of the wallet owner
- **crypto**: Cryptocurrency of the wallet
- **address**: Address of the wallet
- **xpub_index**: The current xpub index for BTC wallet
- **gap_limit**: The gap limit for BTC wallet
- **created_at**: Datetime of the wallet creation

If you have requested the wallet with balance, you can expect a balance object attached to the wallet object:

- **confirmed_sats**
- **unconfirmed_sats**
- **confirmed_fiat**
- **unconfirmed_fiat**
- **fiat_currency**
- **total_addresses**

### Definition

- **GET** 
  - URL: `https://www.blockonomics.co/api/v2/wallets`
  - Description: Retrieve all wallets

- **POST** 
  - URL: `https://www.blockonomics.co/api/v2/wallets`
  - Request body: 
    ```json
    {
      "name": "<Name of wallet for identification>",
      "address": "<Xpub address>",
      "crypto": "<type of crypto, only BTC accepted now>"
    }
    ```
  - Description: Create a new wallet

- **GET** 
  - URL: `https://www.blockonomics.co/api/v2/wallets/{id}?balance=true`
  - Description: Retrieve wallet by ID with balance

- **POST** 
  - URL: `https://www.blockonomics.co/api/v2/wallets/{id}`
  - Request body: 
    ```json
    {
      "name": "<New name>",
      "gap_limit": "<gap limit>"
    }
    ```
  - Description: Update wallet by ID

- **DELETE** 
  - URL: `https://www.blockonomics.co/api/v2/wallets/{id}`
  - Description: Delete wallet by ID


### Example Request

```bash
curl -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/v2/wallets


curl -X POST -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU' -H "Content-Type: application/json" -d '{"name": "new wallet name", "gap_limit": 500}'
https://www.blockonomics.co/api/v2/wallets/88


curl -X DELETE -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/v2/wallets/88
```

### Example Responce 

```json
{
  "data": [
    {
      "id": 88,
      "name": "My Wallet",
      "emailid": "youremail@mail.com",
      "crypto": "BTC",
      "address": "vpub5ZChrqCCu9GuMccp7RsasDB9CcTrHqMGYJZ5WfHWquMtretu2p6QctKAAkyvStgxCMGVycC7Py7C9pz8UeLT9p85CHbacL3sEn3THtEit9t",
      "xpub_index": 1,
      "gap_limit": 20
    }
  ]
}
```
