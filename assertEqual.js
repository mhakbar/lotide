const assertEqual = function(actual, expected, msg, msg2) {

  msg = "Assertion failed: ";
  msg2 = "Assertion Passed: ";

  if (actual === expected) {
    console.log(msg2 + actual + " === " + expected);
  } else {
    console.log(msg + actual + " !== " + expected);
  }

};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



//let error1 = ("Assertion Passed: ");
//let error2 = ("Assertaion failed: ");

//{

//} else {
//console.log(error2 + [actual] !== [expected]);