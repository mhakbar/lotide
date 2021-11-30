// const assertEqual = function(actual, expected, msg, msg2) {

//   msg = "Assertion failed: ";
//   msg2 = "Assertion Passed: ";

//   if (actual === expected) {
//     console.log(msg2 + actual + " === " + expected);
//   } else {
//     console.log(msg + actual + " !== " + expected);
//   }

// }; //Commenting out the assertEqual code as a requirement for week 2 day 2. We learnt how to export code this week.
const assertEqual = require('./assertEqual'); //(function will be called from the assertEqual file)

const tail = function(size, size2) {
  size2 = size.length - 1;
  return (size[size2]);



}
module.exports = assertEqual;
module.exports = tail;


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");
