---
sidebar_position: 6
---

# Payment Buttons

Below are various API endpoints to get information about orders generated using payment buttons. To use any of these, you need to first create payment buttons at <a href="https://www.blockonomics.co/dashboard#" target="_blank">Dashboard </a> > <a href="https://www.blockonomics.co/dashboard#/link" target="_blank"> Buttons & Links </a> > <a href="https://www.blockonomics.co/dashboard#/link?products" target="_blank">Products</a> > Add a Product.

In the below requests, you have to set `apikey` as the Authorization header of the request.

### Get Order
Returns details of a payment button order. `uuid` is the unique identifier of the order.

**GET** `/api/merchant_order/<uuid>`

### Get Order List
Returns a list of all payment button orders in descending order of time. You can use `limit` to restrict the number of records (default is 500).

**GET** `/api/merchant_orders?limit=<number>`

### Order Hook
Each new/updated order will be notified using the order hook URL. This URL can be configured in Blockonomic's Dashboard (<a href="https://www.blockonomics.co/dashboard#" target="_blank">Dashboard </a> -> <a href="https://www.blockonomics.co/dashboard#/link" target="_blank"> Buttons & Links </a> -> <a href="https://www.blockonomics.co/dashboard#/link?options" target="_blank">Options</a> > Order Hook URL).

#### Example callback from server

```bash
<OrderHook_URL>?status=2&uuid=2b0c7e2cd523458098b2
```

### Status Values
- `-1` : **PAYMENT_ERROR** (Happens when the paid BTC amount does not match the expected value)
- `0` : **UNPAID**
- `1` : **IN_PROCESS**
- `2` : **PAID**
