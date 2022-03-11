const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1 === null || arr2 === null) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} matches ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(eqArrays(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]), true); //should be true
assertArraysEqual(eqArrays(map(words, word => word[0]), [ 'r', 'o', 'o', 'a', 'o' ]), true); //should be false
assertArraysEqual(eqArrays(map(words, word => `${word}s`), ["grounds", "controls", "tos", "majors", "toms"]), true); //should be true