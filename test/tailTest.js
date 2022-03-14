const tail = require('../tail')
const assertEqual = require('../assertEqual')

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = tail(["Hello"]); // test with one element
assertEqual(words1.length, 1);

const words2 = tail([]); // test with zero  element
assertEqual(words2.length, 0);