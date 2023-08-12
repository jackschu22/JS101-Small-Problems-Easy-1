// Build a program that asks the user to enter the length and width of 
// a room in meters, and then logs the area of the room to the console 
// in both square meters and square feet.

// Modify the program so that it asks the user for the input type (meters or feet). Compute for the 
// area accordingly, and log it and its conversion in parentheses.
// Note: 1 square meter == 10.7639 square feet
const SQ_FT_PER_SQ_M = 10.7639;

let rlSync = require('readline-sync');
let length = Number(rlSync.question("Enter the length of the room in meters:\n"));
let width = Number(rlSync.question("Enter the width of the room in meters:\n"));

let areaSqM = length * width;
let areaSqFt = areaSqM * SQ_FT_PER_SQ_M;

console.log(`The area of the room is ${areaSqM.toFixed(2)} square meters (${areaSqFt.toFixed(2)} square feet).`);