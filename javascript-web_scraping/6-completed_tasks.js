#!/usr/bin/node
const request = require('request');
const args = process.argv;

request(args[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const dictUs = {};
    const lenData = data.length;
    for (let i = 0; i < lenData; i++) {
      const idNow = data[i].userId;
      const complete = data[i].completed;
      if (idNow in dictUs && complete === true) {
        dictUs[idNow] += 1;
      } else if (complete === true) {
        dictUs[idNow] = 1;
      }
    }
    console.log(dictUs);
  }
});
