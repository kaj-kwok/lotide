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

const assertArraysEqual = function (arr1, arr2){
  if(eqArrays(arr1, arr2)){
    console.log(`✔️✔️✔️ Assertion Passed: ${arr1} matches ${arr2}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(arr1, element){
  const result = arr1.filter(el => !element.includes(el));
  return result
}

//test cases
// console.log(without([1, 2, 3], [1]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]))
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);