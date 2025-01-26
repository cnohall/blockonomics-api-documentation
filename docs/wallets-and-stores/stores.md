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

You can expect a list of <a href="/wallets-and-stores/wallets" target="_blank">wallet objects</a> if you have made a request to the stores with the wallets parameter.

### Definition

```sh
GET https://www.blockonomics.co/api/v2/stores

POST https://www.blockonomics.co/api/v2/stores
Request body: {"name":<Name of store>,"http_callback": <URL of HTTP callback>}

GET https://www.blockonomics.co/api/v2/stores/{id}

POST https://www.blockonomics.co/api/v2/stores/{id}
Request body: {"name":<Name of store>,"http_callback": <URL of HTTP callback>}

DELETE https://www.blockonomics.co/api/v2/stores/{id}

GET https://www.blockonomics.co/api/v2/stores/{id}/wallets
```

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
