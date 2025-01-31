---
sidebar_position: 8
---

import MultipleCodeSnippets from "@site/src/components/organisms/MultipleCodeSnippets";

# USDT Payments

The Blockonomics API allows merchants to accept USDT payments directly into their USDT wallet. It enables payment creation, payment display, transaction monitoring, and confirmation tracking. Setup your USDT Wallet and Store in the Blockonomics Dashboard.

<center>![USDT Payments](../assets/usdt-payments.svg)</center>

### 1. Create Payment

To fetch the USDT payment address for your store, use the `new_address` endpoint.

#### Example Request

<MultipleCodeSnippets variant="USDT Payments - Create Payment" />

#### Parameters

- `crypto`: The cryptocurrency to use (USDT)
- `match_callback`: String to match part of your callback URL.

#### Example Response

```json
{
  "address": "0x0c1EA7FDCA81357658904d9fa6Da730c3ba19B26"
}
```

### 2. Display Payment

To display the wallet connection and handle USDT payments, use the Web3 Payment Element. Customize the attributes as needed to integrate with your checkout flow.

<MultipleCodeSnippets variant="USDT Payments - Display Payment" />

#### Attributes

- `order_amount`: The amount of USDT to pay
- `receive_address`: Your USDT receiving address
- `redirect_url`: URL to redirect upon payment
- `testnet`: The network to use (`0` = mainnet, `1` = sepolia testnet)

Once the payment is completed, the user will be redirected to the `redirect_url` containing the transaction hash (txhash).

```html
/payment.php?order_id=ORDER_ID&txhash=0x712f876339d877e7558f25b4c0b684c5e1d1a11472d407a175c231894b280714
```

#### Retrieving Transaction Hash

Extract the transaction hash from the txhash URL parameter and store it in your database for tracking.

<MultipleCodeSnippets variant="USDT Payments - Transaction Hash" />

### 3. Monitor Transaction

After receiving the transaction hash, use the `monitor_tx` endpoint to begin tracking the transaction.

<MultipleCodeSnippets variant="USDT Payments - Monitor Transaction" />

### Parameters

- `txhash`: The received transaction hash
- `crypto`: The cryptocurrency used (USDT)
- `match_callback`: String to match part of your callback URL.
- `testnet`: Indicates if the transaction is on the testnet (`0` = mainnet, `1` = sepolia testnet)

### 4. Callback Notification

Once the payment is confirmed, a callback request is sent to your specified callback URL with the transaction details.

#### Parameters

- `txid`: The transaction ID/Hash
- `addr`: Your USDT receive address
- `value`: The USDT amount in smallest units (6 decimals). For example, `value=1000000` corresponds to 1 USDT
- `status`: The transaction status (`0` = unconfirmed, `1` = partially confirmed, `2` = confirmed)
- `secret`: Security secret
- `crypto`: The cryptocurrency used (USDT)
- `testnet`: Indicates if the transaction is on the testnet (`0` = mainnet, `1` = sepolia testnet)

#### Example

```html
YOUR_CALLBACK_URL?txid=0x712f876339d877e7558f25b4c0b684c5e1d1a11472d407a175c231894b280714&addr=0x0c1EA7FDCA81357658904d9fa6Da730c3ba19B26&value=1000000&status=2&crypto=USDT&testnet=1
```

#### Recieve Callback

<MultipleCodeSnippets variant="USDT Payments - Recieve Callback" />
