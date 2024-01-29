#!/usr/bin/node
const args = process.argv;
const conA = Number(args[2]);
const conB = Number(args[3]);
let bigSoFar = conA;
let secondlargest = conB;
if (args.length <= 3) {
  console.log(0);
} else {
  for (let i = 3; i < args.length; i++) {
    if (Number(args[i]) > bigSoFar) {
      secondlargest = bigSoFar;
      bigSoFar = Number(args[i]);
    }
    if (Number(args[i]) > secondlargest && Number(args[i]) < bigSoFar) {
      secondlargest = Number(args[i]);
    }
  }
  console.log(secondlargest);
}
