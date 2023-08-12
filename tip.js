let rlSync = require('readline-sync');
let bill = Number(rlSync.question("What is the bill? "));
let tipPercentage = Number(rlSync.question("What is the tip percentage? "));

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`The total is $${total.toFixed(2)}`)

/* Alternative solution 

let readline = require("readline-sync");

console.log("What is the bill?");
let bill = Number(readline.question());

console.log("What is the tip rate?");
let tipPercentage = Number(readline.question());

let tip = bill * (tipPercentage / 100);
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${bill.toFixed(2)}`); 

*/