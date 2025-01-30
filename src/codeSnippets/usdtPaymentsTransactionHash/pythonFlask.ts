export const usdtPaymentsTransactionHashPythonFlask = `from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/payment', methods=['GET'])
def payment():
    order_id = request.args.get('order_id')
    txhash = request.args.get('txhash')
    
    # Save the txhash to the database, linked to the order.
    # Your logic goes here..

    # Monitor Transaction
    
    return redirect('https://example.com/order_received')

if __name__ == "__main__":
    app.run(debug=True)
`;
