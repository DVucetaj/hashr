const axios = require('axios');
const querystring = require('querystring');
const base64_encoded_bearer_token_credentials = process.env.base64_encoded_bearer_token_credentials;

function twitterAPI(search_term) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: 'https://api.twitter.com/oauth2/token',
      headers: { 'Authorization': `Basic ${base64_encoded_bearer_token_credentials}`,
                 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data: querystring.stringify({ 'grant_type': 'client_credentials' })
    })
    .then((response) => {
      const data = response.data;
      if(data.token_type === 'bearer') {
        const access_token = data.access_token;
        axios({
          method: 'GET',
          url: `https://api.twitter.com/1.1/search/tweets.json?q=%23${search_term}&result_type=mixed&lang=en&count=100`,
          headers: { 'Authorization': `Bearer ${access_token}` }
        })
        .then((response) => {
          if(response.status === 200) {
            const tweets = response.data.statuses;
            resolve (tweets);
          }
        })
        .catch((error) => {
          reject (null);
        })
      }
    })
    .catch((error) => {
      reject (null);
    });
  })
}

module.exports = twitterAPI;
