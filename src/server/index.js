const path = require('path');
const express = require('express');
const aylien = require('aylien_textapi');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const app = express();

app.use(express.static('dist'));

app.use(cors());

app.use(bodyParser.json());
console.log(__dirname);

const textApi = new aylien({
  application_id: process.env.aylien_app_id,
  application_key: process.env.aylien_api_key
});

console.log(process.env.aylien_api_key);

app.get('/', function(req, res) {
  res.sendFile('../../dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});

app.post('/test', (req, res) => {
  textApi.sentiment(
    {
      url: req.body.url
    },
    (err, resp) => {
      res.send(err || resp);
    }
  );
});
