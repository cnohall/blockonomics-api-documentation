export const usdtPaymentsMonitorTransactionRuby = `require 'net/http'
uri = URI('https://blockonomics.co/api/monitor_tx')
request = Net::HTTP::POST.new(uri)
request['Authorization'] = 'Bearer YOUR_API_KEY'
request['Content-Type'] = 'application/json'
request.body = '{"txhash":txhash,"crypto":"USDT","match_callback":"MATCH_CALLBACK","testnet":1}'
response = Net::HTTP.start(uri.hostname, uri.port) { |http| http.request(request) }
`;
