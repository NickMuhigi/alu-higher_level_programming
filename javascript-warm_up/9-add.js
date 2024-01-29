#!/usr/bin/node
const args = process.argv;
const conA = Number(args[2]);
const conB = Number(args[3]);

function add (a, b) {
  console.log(a + b);
}

if (conA && conB) {
  add(conA, conB);
} else {
  console.log('NaN');
}
