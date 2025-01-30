export const usdtPaymentsTransactionHashRubySinatra = `require 'sinatra'

get '/payment' do
  order_id = params['order_id']
  txhash = params['txhash']
  
  # Save the txhash to the database, linked to the order.
  # Your logic goes here..

  # Monitor Transaction
  
  redirect 'https://example.com/order_received'
end`;
