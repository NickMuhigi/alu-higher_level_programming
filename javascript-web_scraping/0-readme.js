#!/usr/bin/node
const args = process.argv;
const fileA = args[2];

const fs = require('fs');

try {
  console.log(fs.readFileSync(fileA, 'utf8'));
} catch (err) {
  /* errors */
  console.log(err);
}
