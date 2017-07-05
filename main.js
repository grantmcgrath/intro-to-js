// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A:
//console.log(givenName);
//console.log("undefined");

// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A:
//console.log(givenName);
//console.log("Tim");

// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:
//console.log(givenName);
//console.log("Tim");

// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A:
//console.log(greeting);
//console.log("Hello, how are you? Tim");

// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A:
//console.log(math);
//console.log("40");

// 6.
// What is `math` set to?
math = high - "5";
// A:
//console.log(math);
//console.log("45");

// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:
let timsAge = today - born;
//console.log(givenName + " is " + timsAge + " years old");
//console.log("Tim is 33 years old");

// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Grant";
let instructorName = "Lexi";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

//console.log(statement);
//console.log("Grant is taking a class at The Iron Yard, my instructor's name is Lexi");

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber;
let myString;
let myBoolean;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A:
/*
myNumber = 30;
console.log(myNumber);
console.log("30");
myString = "Bob likes burgers";
console.log(myString);
console.log("Bob likes burgers");
myBoolean = true;
console.log(myBoolean);
console.log("true");
myUndefined = "";
console.log(myUndefined);
console.log(" ");
*/

// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
var x = (false == 0);
// A.
//console.log("true");

// 12.
let y = (false == "");
// A.
//console.log(y);
//console.log("true");

// 13.
let z = (0 == "");
// A.
//console.log(z);
//console.log("true");

// 14.
let a = (null == null);
// A.
//console.log(a);
//console.log("true");

// 25.
let b = (undefined == undefined);
// A.
//console.log(b);
//console.log("true");

// 16.
let c = (undefined == null);
// A.
//console.log(c);
//console.log("true");

// 17.
let d = (null == false);
// A.
//console.log(d);
//console.log("false");

// 18.
let e = (NaN == null);
// A.
//console.log(e);
//console.log("false");

// 19.
let f = (NaN == NaN);
// A.
//console.log(f);
//console.log("false");

// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;
  if (thirsty = true)
{
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}
//console.log("I'm parched!");

// For questions 21 - 29 list which statement will be logged.

// 21.
var x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("False!");

// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("False!");

// 23.
// this expression will set x to NaN
var x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("False!");

// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("False!");

// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("True!");

// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("True!");

// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("True!");

// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("True!");

// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
//console.log("True!");

// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
