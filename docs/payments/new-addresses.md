---
sidebar_position: 2
---
import MultipleCodeSnippets from "@site/src/components/organisms/MultipleCodeSnippets";

# New Address

This will return a new address from your wallet to which the payer must send the payment. This call will increment index on server, so that each time you get a new address. To reset index you can use parameter <i>reset=1</i>. This will not increment index and will keep giving last generated address. It is useful for testing purposes.

If you have multiple xpubs under same emailid, you can choose the source Xpub (wallet) using the parameter `match_callback`. This will match given string within your stores and find attached Xpub (wallet)

### Definition

```sh
POST https://www.blockonomics.co/api/new_address

POST https://www.blockonomics.co/api/new_address?reset=1

POST https://www.blockonomics.co/api/new_address?match_callback=www.example.com
```

### Example Request

```sh
curl -d '' -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/new_address


curl -d '' -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/new_address?reset=1


curl -d '' -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU'
https://www.blockonomics.co/api/new_address?match_callback=www.example.com
```

### Example Response

```json
{"address": "14gaB2Xb7T1gGx65Sy2vdP37oU2TrJHWAA"}
{"address": "13C84DfUxXWsbi5haUc1uYacP9DmXg6bsc", "reset": 1}
{"address": "13C84DfUxXWsbi5haUc1uYacP9DmXg6bsc", "account": "xpub6D9qFCtaxyyP3aAMy..."}
```

<MultipleCodeSnippets variant="New Address" />
