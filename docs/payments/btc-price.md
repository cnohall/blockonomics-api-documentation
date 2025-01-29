---
sidebar_position: 5
---

# BTC Price

You can use this endpoint to fetch the current bitcoin to fiat price. Our prices are same as that of BitPay. We support all major fiat currencies. Here is the <a href="https://www.blockonomics.co/api/currencies" target="_blank"><b>list of currency codes</b></a> supported.

### Definition
```bash
GET https://www.blockonomics.co/api/price?currency=<currency_code>
```
### Example Request
```sh
curl https://www.blockonomics.co/api/price?currency=EUR
```
### Example Response
```json
{
  "price": 7866.85
}
```
