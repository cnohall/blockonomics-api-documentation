---
sidebar_position: 3
---
import MultipleCodeSnippets from "@site/src/components/organisms/MultipleCodeSnippets";

# HTTP Callback

Blockonomics will send HTTP callbacks for payments on your address. For each callback, the following parameters are returned:

- **status**: The status of the transaction. Possible values are:
  - `0`: Unconfirmed
  - `1`: Partially Confirmed
  - `2`: Confirmed
- **addr**: The receiving address
- **value**: The received payment amount in satoshis
- **txid**: The ID of the paying transaction
- For unconfirmed transactions, an <a href="https://www.blockonomics.co/api-documentation#transaction-detail" target='_blank'>rbf attribute</a> may be returned.

A callback succeeds when the server returns a `200` HTTP status. Callbacks are retried 7 times with an exponential backoff of 4 seconds. Use <a href="https://www.blockonomics.co/dashboard#/store" target='_blank'>Dashboard > Stores</a> to configure callbacks for your server. Your callback URL can also contain a secret parameter for additional security.

**Warning about zero confirmations**: It is always recommended to wait for at least one confirmation to deliver your product/service. Sometimes you may want to accept zero confirmation for fast delivery of digital goods. In such cases, you should reject unconfirmed payments that have the rbf attribute. This is because RBF payments can be easily cancelled or reversed.

### Example Callback

```bash
/api/callback_url?status=0&addr=1C3FrYaGgUJ8R21jJcwzryQQUFCWFpwcrL&value=10000&txid=4cb3 0849ffcaf61c0e97e8351cca2a32722ceb6ad5f34e630b4acb7c6dc1e73b&rbf=1
```

<MultipleCodeSnippets variant="HTTP Callback" />



