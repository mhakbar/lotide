const assertEqual = function(actual, expected, msg, msg2) {

  msg = "Assertion failed: ";
  msg2 = "Assertion Passed: ";

  if (actual === expected) {
    console.log(msg2 + actual + " === " + expected);
  } else {
    console.log(msg + actual + " !== " + expected);
  }

};
//commenting below test code on 29th Nov 2021, Week 2, Day 2.

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);



//let error1 = ("Assertion Passed: ");
//let error2 = ("Assertaion failed: ");

//{

//} else {
//console.log(error2 + [actual] !== [expected]);

//29th Nov 2021, week 2, adding export file to LOTIDE folder

module.exports = assertEqual;