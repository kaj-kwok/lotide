const tail = require('../tail')
const assert = require('chai').assert;

describe("test values for using tail function", () => {
  it("return should be ['Lighthouse', 'Labs'] for array ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
  it("return should be [] for array ['1']", () => {
    assert.deepEqual(tail(["1"]), [])
  });
  it("return should be [] for array []", () => {
    assert.deepEqual(tail([]), [])
  });
})