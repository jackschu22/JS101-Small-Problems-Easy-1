// Write a program that asks the user to enter an integer greater 
// than 0, then asks whether the user wants to determine the sum or the
//  product of all numbers between 1 and the entered integer, inclusive.

// function to sum integers from 1 - user's number
function sum(integer) {
	let sumAnswer = 0;
	for (let i = 1; i <= integer; i += 1) {
		sumAnswer += i;
	}
	return sumAnswer;
}

// function to multiply integers from 1 - user's number
function product(integer) {
	let productAnswer = 1;
	for (let i = 1; i <= integer; i += 1) {
		productAnswer *= i;
	}
	return productAnswer;
}

// read in user input
let rlSync = require('readline-sync');
let integer = Number(rlSync.question("Enter an integer greater than 0: "));
let operation = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product: ");

// switch statement (could also use if/else)
switch (operation) {
	case 's':
		console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}.`)
		break;
	case 'p':
		console.log(`The product of the integers between 1 and ${integer} is ${product(integer)}.`)
		break;


// add more to validate input and generate error messages
// what if array is passed as an argument? Array.reduce