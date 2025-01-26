export const newAddressNodeJS = `
const axios = require("axios");

const api_key = 'INSERT_API_KEY_HERE';
const url = 'https://www.blockonomics.co/api/new_address';

const headers = {
  'Authorization': Bearer {api_key}
};

axios.post(url, {}, { headers: headers })
  .then(response => {
    if (response.status === 200) {
      console.log(response.data.address);
    } else {
      console.log(ERROR: {response.status} {response.data.message});
    }
  })
  .catch(error => {
    if (error.response) {
      console.log(ERROR: {error.response.status} {error.response.data.message});
    } else {
      console.log(ERROR: {error.message});
    }
  });
`;
