const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//test assertions

const test1 = {
  a: "2",
  e: "5"
}
const test2 = {
  a: "2",
  e: "5"
}

assertEqual(eqObjects(test1, test2), true); // true

const test3 = {
  a: "1",
  e: "5",
  b: "2"
}

assertEqual(eqObjects(test2, test3), false); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
