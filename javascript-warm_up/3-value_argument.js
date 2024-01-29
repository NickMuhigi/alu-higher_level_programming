#!/usr/bin/node
const args = process.argv;
if (args[2] != null) {
  console.log(args[2]);
} else {
  console.log('No argument');
}
