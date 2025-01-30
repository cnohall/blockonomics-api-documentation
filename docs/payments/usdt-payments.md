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
  "address" : "0x0c1EA7FDCA81357658904d9fa6Da730c3ba19B26" 
}
```

### 2. Display Payment

To display the wallet connection and handle USDT payments, use the Web3 Payment Element. Customize the attributes as needed to integrate with your checkout flow.

<MultipleCodeSnippets variant="USDT Payments - Display Payment" />
