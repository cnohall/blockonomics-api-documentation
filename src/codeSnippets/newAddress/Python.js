export const newAddressPython = `
import requests

api_key = 'INSERT_API_KEY_HERE'
url = 'https://www.blockonomics.co/api/new_address'

headers = {
  'Authorization': f'Bearer {api_key}'
}

response = requests.post(url, headers=headers)

if response.status_code == 200:
  response_obj = response.json()
  print(response_obj['address'])
else:
  print(f"ERROR: {response.status_code} {response.json()['message']}")
`;