#!/usr/bin/node
const args = process.argv;
const fileA = args[2];
const fileB = args[3];
const fs = require('fs');

try {
  fs.writeFileSync(fileA, fileB, 'utf8');
} catch (err) {
  console.log(err);
}
