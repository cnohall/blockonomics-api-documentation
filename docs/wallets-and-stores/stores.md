---
sidebar_position: 2
---

# Stores

The Stores API lets you interact with all your stores, including creating, retrieving, updating & deleting, as well as attaching wallets to a store. You can use the parameter `wallets=true` with the Stores endpoint to retrieve the attached wallets of the stores.

You can expect a standardized store object working with store endpoints:

- **id**: Unique identifier of the store
- **name**: Given name
- **emailid**: Email of the store owner
- **http_callback**: Callback URL of the store

You can expect a list of wallet objects if you have made a request to the stores with the wallets parameter.

### Definition

- **GET** 
  - URL: `https://www.blockonomics.co/api/v2/stores`
  - Description: Retrieve all stores

- **POST** 
  - URL: `https://www.blockonomics.co/api/v2/stores`
  - Request body: 
    ```json
    {
      "name": "<Name of store>",
      "http_callback": "<URL of HTTP callback>"
    }
    ```
  - Description: Create a new store

- **GET** 
  - URL: `https://www.blockonomics.co/api/v2/stores/{id}`
  - Description: Retrieve store by ID

- **POST** 
  - URL: `https://www.blockonomics.co/api/v2/stores/{id}`
  - Request body: 
    ```json
    {
      "name": "<Name of store>",
      "http_callback": "<URL of HTTP callback>"
    }
    ```
  - Description: Update store by ID

- **DELETE** 
  - URL: `https://www.blockonomics.co/api/v2/stores/{id}`
  - Description: Delete store by ID

- **GET** 
  - URL: `https://www.blockonomics.co/api/v2/stores/{id}/wallets`
  - Description: Retrieve wallets attached to the store by store ID

### Attach / Detach Wallets

- **POST** 
  - URL: `https://www.blockonomics.co/api/v2/stores/{id}/wallets`
  - Request body: 
    ```json
    {
      "wallet_id": "<id of wallet to attach>"
    }
    ```
  - Description: Attach wallet to store by store ID

- **DELETE** 
  - URL: `https://www.blockonomics.co/api/v2/stores/{id}/wallets/{id}`
  - Description: Detach wallet from store by store ID

### Example Request

```bash
curl -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/v2/stores


curl -X POST -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU' -H "Content-Type: application/json" -d '{"name": "new store name", "http_callback": "https://newcallbackhost.com/callback"}'
https://www.blockonomics.co/api/v2/stores/88


curl -X DELETE -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/v2/stores/88
```

### Example Response

```json
{
  "data": [
    {
      "id": 88,
      "emailid": "youremail@mail.com",
      "name": "Store name",
      "http_callback": "https://www.yourhost.com/callback",
      "wallets": [
        {
          "id": 37,
          "name": "My Wallet",
          "emailid": "youremail@mail.com",
          "crypto": "BTC",
          "address": "vpub5ZChrqCCu9GuMccp7RsasDB9CcTrHqMGYJZ5WfHWquMtretu2p6QctKAAkyvStgxCMGVycC7Py7C9pz8UeLT9p85CHbacL3sEn3THtEit9t",
          "xpub_index": 1,
          "gap_limit": null
        }
      ]
    }
  ]
}
```
