#!/usr/bin/node
const args = process.argv;
const conV = Number(args[2]);
if (conV) {
  for (let i = 0; i < conV; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
