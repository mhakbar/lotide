const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected, msg, msg2) {

//   msg = "Assertion failed: ";
//   msg2 = "Assertion Passed: ";

//   if (actual === expected) {
//     console.log(msg2 + actual + " === " + expected);
//   } else {
//     console.log(msg + actual + " !== " + expected);
//   }

// };

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  if (arr1.length !== arr2.length) return false;
  // loop through elements in an array to each other
  for (let i = 0, j = 0; i < arr1.length; j++,i++) {
    // check whether the two elements of the array are equal
    if (arr1[i] === arr2[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

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

module.exports = assertEqual;
module.exports = eqArrays;

// const one = ["Yo Yo", "Lighthouse", "Labs"];
// const two = ["Yo Yo", "Lighthouse", "Labs", ""];
// const three = ["Yo Yo", "Lighthouse", "Labs"];

// const four = [1];
// const five = [1];
// const six = [3, 2, 1];

// assertEqual(eqArrays(["Yo Yo", "Lighthouse", "Labs"],["Yo Yo", "Lighthouse", "Labs"]));
// assertEqual(eqArrays(["Yo Yo", "Lighthouse", "Labs"],["Yo Yo", "Lighthouse", "Labs", ""]));
// assertEqual(eqArrays(3,3));
// assertEqual(eqArrays(two,3));
// assertEqual(eqArrays(four,five));


// assertEqual(eqArrays(one,three));
// assertEqual(eqArrays(four,six));


//assertEqual(eqArrays(arr4,arr5));
//assertEqual(eqArrays(arr5,arr6));