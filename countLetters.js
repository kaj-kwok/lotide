const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  let object = {}
  let editedString = string.replaceAll(" ", "")
    for(const letter of editedString){
      if(object[letter]){
        object[letter] += 1
      }
      else{
        object[letter] = 1
      }
    }
  return object
}
