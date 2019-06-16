const  Twitter = require('twitter');
const config = require('./config.js');
var Tweet = require('./tweet.js');

const T = new Twitter(config);

var params = {
  q: '#loveisland',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

function handleResponseFromTwitter(err,data,response) {
    if(!err){
      tweets = data.statuses.map( tweet => new Tweet(tweet.id, tweet.text, tweet.created_at));
      console.log(tweets)
  } else {
    console.error(err);
  }
}

function callTwitter() {
  T.get('search/tweets', params, handleResponseFromTwitter
)};

module.exports = {
  callTwitter: callTwitter
}
