const eqObjects = function(object1, object2){
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  if(keys1.length !== keys2.length){
    return false
  }
  for(key of keys1){
    if(Array.isArray(object1[key]) === true && Array.isArray(object1[key]) === true){
      return eqArrays(object1[key], object2[key])
    }
    else if(object1[key] !== object2[key]){
      return false
    }
  }
  return true
}

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`✔️✔️✔️ Assertion Passed: ${inspect(actual)} matches ${inspect(expected)}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

console.log(assertObjectsEqual(cd, dc))