const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  if(arr1 == null || arr2 == null){
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  }
  return true;
}

const assertArraysEqual = function (actual, expected){
  if(actual === expected){
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} matches ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const middle = function(array){
  let middleArray = []
  if(array.length === 1 || array.length === 2){
    return []
  }
  else if(array.length % 2 != 0){
    let index = Math.floor(array.length / 2)
    return [array[index]]
  }
  else if(array.length % 2 === 0){
    let index = array.length / 2
    return [array[index-1], array[index]]
  }
}

// test assertions
// console.log(middle([1, 2, 3]))
// console.log(middle([1, 2, 3, 4, 5]))

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2,3]), true)
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2,3]), true)