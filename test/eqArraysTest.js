const assertEqual = require('..//assertEqual')
const eqArrays = require('..//eqArrays')

const one = ["Yo Yo", "Lighthouse", "Labs"];
const two = ["Yo Yo", "Lighthouse", "Labs", ""];
const three = ["Yo Yo", "Lighthouse", "Labs"];

const four = [1];
const five = [1];
const six = [3, 2, 1];

assertEqual(eqArrays(["Yo Yo", "Lighthouse", "Labs"],["Yo Yo", "Lighthouse", "Labs"]));
assertEqual(eqArrays(["Yo Yo", "Lighthouse", "Labs"],["Yo Yo", "Lighthouse", "Labs", ""]));
assertEqual(eqArrays(3,3));
assertEqual(eqArrays(two,3));
assertEqual(eqArrays(four,five));