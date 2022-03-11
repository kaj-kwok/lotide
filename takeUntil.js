const takeUntil = function(array, callback) {
  let arr = []
  for(ele of array){
    if(!callback(ele)){
    arr.push(ele)
    }
    else{
      break;
    }
  }
  return arr;
}

// expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

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

assertArraysEqual(eqArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]), true) // should be true
assertArraysEqual(eqArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 2 ]), true) // should be false