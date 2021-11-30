const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// const eqArrays = (arr1, arr2) => {
//   // check if the array lengths are different
//   if (arr1.length !== arr2.length) return false;
//   // loop through elements in an array to each other
//   for (let i = 0, j = 0; i < arr1.length; j++,i++) {
//     // check whether the two elements of the array are equal
//     if (arr1[i] === arr2[j]) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   else return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
// };

const middle = function(array1) {

  //let secondArray = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1.length === 0 || array1.length === 1 ) {
      return ("empty array: ", []);

    } else if (array1.length % 2 === 0) {
      let j = array1.length / 2;
      return ("middle two elements of  array: ", [array1[j - 1], array1[j]]);


    } else {
      let j = (array1.length - 1) / 2;
      return ("single middle element of array: ", [array1[j]]);


    }
  }



};

module.exports = middle;

// console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
// console.log(assertArraysEqual(middle([1, 2]),[]));
// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]));