export const usdtPaymentsRecieveCallbackPythonFlask = `from flask import Flask, request, abort

app = Flask(__name__)

# Configuration
SECRET = "YOUR_SECRET"
EXPECTED_AMOUNT = 10

@app.route("/callback", methods=["GET"])
def callback():
    txid = request.args.get("txid")
    value = request.args.get("value", type=float)
    status = request.args.get("status", type=int)
    addr = request.args.get("addr")
    crypto = request.args.get("crypto")
    testnet = request.args.get("testnet", type=int)
    received_secret = request.args.get("secret")

    # Security: Match the secret
    if received_secret != SECRET:
        abort(403, "Invalid secret")

    # Validation: Only accept confirmed transactions
    if status != 2:
        abort(400, "Transaction not confirmed")

    # Validation: Only accept mainnet transactions
    if testnet != 0:
        abort(400, "Transaction from testnet is not allowed")

    # Validation: Amount sent matches the expected amount
    sent_amount = value / 1e6
    if EXPECTED_AMOUNT > sent_amount:
        abort(400, "Insufficient amount")

    # Save the payment information and update the order status
    # Your logic for saving payment info and updating order status goes here
    
    return "Payment processed successfully", 200

if __name__ == "__main__":
    app.run(port=5000)
`;
