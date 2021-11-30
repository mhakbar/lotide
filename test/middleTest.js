// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual')

// console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
// console.log(assertArraysEqual(middle([1, 2]),[]));
// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]));


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns Lighthouse for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(middle(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse']);
    
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
     assert.strictEqual(middle([1, 2, 3, 4]),[2, 3]); 
   });

});