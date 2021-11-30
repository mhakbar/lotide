// const assertEqual = require('..//assertEqual');
// const tail = require('..//tail');



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns Labs for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Labs');
    
  });

  it("returns '6' for ['5', '6']", () => {
     assert.strictEqual(tail(['5', '6']), '6'); 
   });

});