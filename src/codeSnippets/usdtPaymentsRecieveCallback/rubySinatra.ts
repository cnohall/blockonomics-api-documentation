export const usdtPaymentsRecieveCallbackRubySinatra = `require 'sinatra'

# Configuration
SECRET = "YOUR_SECRET"
EXPECTED_AMOUNT = 10

get '/callback' do
  txid = params['txid']
  value = params['value'] ? params['value'].to_f : nil
  status = params['status'] ? params['status'].to_i : nil
  addr = params['addr']
  crypto = params['crypto']
  testnet = params['testnet'] ? params['testnet'].to_i : nil
  received_secret = params['secret']

  # Security: Match the secret
  halt 403, "Invalid secret" if received_secret != SECRET

  # Validation: Only accept confirmed transactions
  halt 400, "Transaction not confirmed" if status != 2

  # Validation: Only accept mainnet transactions
  halt 400, "Transaction from testnet is not allowed" if testnet != 0

  # Validation: Amount sent matches the expected amount
  sent_amount = value / 1e6
  halt 400, "Insufficient amount" if EXPECTED_AMOUNT > sent_amount

  # Save the payment information and update the order status
  # Your logic for saving payment info and updating order status goes here

  "Payment processed successfully"
end`;
