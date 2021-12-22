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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);