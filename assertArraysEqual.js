const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} matches ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertArraysEqual