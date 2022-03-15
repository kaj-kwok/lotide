const middle = require('../middle');
const assert = require('chai').assert;

describe("testing that middle function works", () => {
  it("function returns [2,3] for array [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
  it("function returns [2] for array [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it("function returns [] for array [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it("function returns [] for array [1]", () => {
    assert.deepEqual(middle([1]), [])
  });
});

// assertArraysEqual(middle([1, 2, 3, 4]), [2,3])
// assertArraysEqual(middle([1, 2, 3]), [2,3])