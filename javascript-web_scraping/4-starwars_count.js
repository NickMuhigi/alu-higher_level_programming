#!/usr/bin/node
const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const movieCount = data.results.length;
    let finalResult = 0;
    // const comString = 'https://swapi-api.hbtn.io/api/people/18/';
    for (let i = 0; i < movieCount; i++) {
      const numChars = data.results[i].characters.length;
      for (let j = 0; j < numChars; j++) {
        const comString0 = data.results[i].characters[j];
        if (comString0.slice(-4, -1) === '/18') {
          finalResult += 1;
        }
      }
    }
    console.log(finalResult);
  }
});
