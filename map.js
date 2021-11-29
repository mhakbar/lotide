// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// }

//map(console.log(words));
//console.log("thisis the correct file");


// const map2 = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// };

// const map2 = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;

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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);


};

// map(["ground", "control", "to", "major", "tom"],);
// map(["ground", "control", "to", "major", "tom"], );





assertArraysEqual([1,2,3], [1,2,3]);

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;

};

module.exports = map;
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));