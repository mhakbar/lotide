// test/assertEqualTest.js
//const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
//const assertEqual = require('../assertEqual');



assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]) // => Assertion Failed
