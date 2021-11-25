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
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]) // => Assertion Failed

const countPositions = function(lettersString) {
  const results = {}
  
  for(let i = 0; i<lettersString.length; i++) {
    if(lettersString[i] !== ' ') {
      if(results[lettersString[i]] === undefined) {
        results[lettersString[i]] = [i];
      }
      else {
        results[lettersString[i]].push(i);
      }
    }
    
  }
  console.log(results);
  return results;
}

const letters = "hello";
const results1 = countPositions(letters);

assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["l"], [2,3]);
assertArraysEqual(results1["o"], [4]);
