require('dotenv').config();
const bodyParser = require('body-parser')
var path = require('path')
var Twitter = require('twitter');
var express = require('express');
var AWS = require('aws-sdk');
var app = express();
var fs = require("fs");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')))

const controllers = require('./controllers')
app.use('/api', controllers)
app.get('*',(req, res) =>{
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

var http = require('http').createServer(app);
var server = app.listen(PORT);

/*  AWS  Config
AWS.config.credentials = new AWS.SharedIniFileCredentials({profile:process.env.AWS_PROFILE});
AWS.config.update({region: process.env.REGION});
*/

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


let query = 'dogs';
var temp = client.get('search/tweets', {q:'#' + query, count:100}, function(error, tweetRes, response) {
  var tempArr = [];
  tweetRes["statuses"].forEach((status) => {
    status.entities.hashtags.forEach((obj)=>{
        tempArr.push(obj.text.toLowerCase());
    })
  })
  console.log(tempArr);
  return tempArr;
})//END client.get
server.close();

//Used to post to API key linked account
/*
client.post('statuses/update', {status: 'Test tweet #API'})
.then(function (tweet) {
  console.log(tweet);
});
*/
