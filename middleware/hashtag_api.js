const twitterAPI = require('./twitter');

async function hashtagAPI(search_term) {
  // hashtags from other API can be agglomerated here
  const tweets = await twitterAPI(search_term);
  return tweets;
};

module.exports = hashtagAPI;
