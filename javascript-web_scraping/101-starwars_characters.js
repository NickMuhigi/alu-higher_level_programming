#!/usr/bin/node
/*
const request = require('request');
const args = process.argv;
let dicList = {};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

request(`https://swapi-api.hbtn.io/api/films/${args[2]}`, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const charEnd = data.characters;
    const loopTime = charEnd.length;
    for (let i = 0; i < loopTime; i++) {
      request(charEnd[i], function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.parse(body).name);
          dicList[JSON.parse(body).name] = i;
        }
      });
        sleep(8000);
    }
    console.log(dicList);
  }
});
*/

const request = require('request');
const { argv, exit } = require('process');

if (argv.length !== 3) {
  exit(0);
}

const options = {
  url: `https://swapi-api.hbtn.io/api/films/${argv[2]}/`,
  method: 'GET',
  headers: {
    'Accept-Charset': 'utf-8'
  }
};

function requestStart (optionsUrl, saveValue) {
  request(optionsUrl, function (err, res, body) {
    if (err) throw err;

    const characters = JSON.parse(body).characters;
    const result = {};

    characters.forEach(element => {
      request(element, function (err, res, _body) {
        if (err) throw err;

        const name = JSON.parse(_body).name;

        result[element.split('/')[5]] = name;
        saveValue(result, characters.length);
      });
    });
  });
}

let i = 0;
requestStart(options, function (dict, length) {
  i++;
  if (i === length) {
    for (const name in dict) {
      console.log(dict[name]);
    }
  }
});
