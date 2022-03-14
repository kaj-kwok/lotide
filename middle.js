const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle

