const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Priority serve any static files.
app.use(express.static(path.join(__dirname, '/client/build')));

// All remaining requests return the React app, so it can handle routing.
// app.get('/', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.use(controllers);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
