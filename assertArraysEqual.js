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

const assertArraysEqual = function (arr1, arr2, expected){
  if(eqArrays(arr1, arr2) === expected){
    console.log(`✔️✔️✔️ Assertion Passed: ${arr1} matches ${arr2}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1,2,3], [1,2,3], true)
assertArraysEqual([1,2,3], [1,2,3], false)
assertArraysEqual([1,2,3,5], [1,2,3], false)
assertArraysEqual([1,2,3], ["1",2,3], true)