#!/usr/bin/node
const args = process.argv;
const conV = Number(args[2]);
if (conV) {
  console.log(`My number: ${args[2]}`);
} else {
  console.log('Not a number');
}
