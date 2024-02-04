#!/usr/bin/node
exports.esrever = function (list) {
  const reverseList = [];
  while (list.length > 0) {
    reverseList.push(list.pop());
  }
  return reverseList;
};
