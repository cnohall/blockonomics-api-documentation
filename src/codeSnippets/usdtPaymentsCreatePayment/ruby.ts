export const usdtPaymentsCreatePaymentRuby = `require 'net/http'
uri = URI('https://blockonomics.co/api/new_address?match_callback=MATCH_CALLBACK&crypto=USDT')
request = Net::HTTP::POST.new(uri)
request['Authorization'] = 'Bearer YOUR_API_KEY'

response = Net::HTTP.start(uri.hostname, uri.port) { |http| http.request(request) }
`;
