#!/usr/bin/node
const request = require('request');
const fs = require('fs');
request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = body;
    fs.writeFileSync(process.argv[3], data, 'utf8');
  }
});
