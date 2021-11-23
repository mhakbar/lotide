// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected, msg, msg2) {

  msg = "Assertion failed: ";
  msg2 = "Assertion Passed: ";

  if (actual === expected) {
    console.log(msg2 + actual + " === " + expected);
  } else {
    console.log(msg + actual + " !== " + expected);
  }

};

const head = function (size) {
  return (size[0]);
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");