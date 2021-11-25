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

const countLetters = function(lettersString) {
  const results = {}
  
  for(let i = 0; i<lettersString.length; i++) {
    if(lettersString[i] !== ' ') {
      if(results[lettersString[i]] === undefined) {
        results[lettersString[i]] = 1;
      }
      else {
        results[lettersString[i]] = results[lettersString[i]] + 1;
      }
    }
    
  }
  console.log(results);
  return results;
}

const letters = "light house in the house";

countLetters(letters);
