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


const findKeyByValue = function (arrayOfShows, value) {

  for (const key in arrayOfShows) {
    if(arrayOfShows[key] === value) {
      return key;
    }
  }

  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");