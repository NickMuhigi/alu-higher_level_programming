#!/usr/bin/node
let output;
const args = process.argv;
const conV = Number(args[2]);
if (conV) {
  for (let i = 0; i < conV; i++) {
    output = '';
    for (let j = 0; j < conV; j++) {
      output += 'X';
    }
    console.log(output);
  }
} else {
  console.log('Missing size');
}
