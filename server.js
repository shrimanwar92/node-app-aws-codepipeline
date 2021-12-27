'use strict';

const express = require('express');
var fs = require('fs');
const axios = require("axios");

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  axios.get('https://random-data-api.com/api/users/random_user').then(function (response) {
      res.json(response.data);
  }).catch(function (error) {
      console.log(error);
  });
});

app.get('/nation', (req, res) => {
  axios.get('https://random-data-api.com/api/nation/random_nation').then(function (response) {
      res.json(response.data);
  }).catch(function (error) {
      console.log(error);
  });
});

app.get('/vijay', (req, res) => {
  res.json({message: "Hello from Vijay"});
});

app.get('/nilay', (req, res) => {
  res.json({message: "Hello from Nilay"});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);