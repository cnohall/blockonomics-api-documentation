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