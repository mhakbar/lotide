const assertEqual = function(actual, expected, msg, msg2) {

  msg = "Assertion failed: ";
  msg2 = "Assertion Passed: ";

  if (actual === expected) {
    return true;
  } else {
    return false;
  }

};

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

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return;
  }

  for(const key in object1) {
    if(object1[key] instanceof Array) {
      if(eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    }
    else {
      if(assertEqual(object1[key], object2[key]) === false) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false