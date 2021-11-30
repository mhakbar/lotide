// FUNCTION IMPLEMENTATION

//on 29th Nov, Week 2, Day 2, Assert Equal functions will be imported from source file. 
// const assertEqual = function(actual, expected, msg, msg2) {

//   msg = "Assertion failed: ";
//   msg2 = "Assertion Passed: ";

//   if (actual === expected) {
//     console.log(msg2 + actual + " === " + expected);
//   } else {
//     console.log(msg + actual + " !== " + expected);
//   }

// };

const assertEqual = require('./assertEqual');// added from , week 2, day 2, https://web.compass.lighthouselabs.ca/days/w02d1/activities/841

const head = function (size) {
  return (size[0]);
}

// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//above Test code will be moved to headTest.js in the test folder

module.exports = assertEqual;
module.exports = head;