//* ============================
//* Data Types Section - part 2
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

//examples: 
// const str = "hello " + "world";
// console.log(str)

// const str1 = "hello " + 2;
// console.log(str1);

// const str2 = "3" + 2;
// console.log(str2);

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10;
// console.log(sum);//510

// let sum2 = "5" - 5;
// console.log(sum2); //0

//* ============================
//* Tricky Interview Questions
//* ============================

// console.log(10 + "20");  //1020

// console.log(9 - "5"); //4

// console.log("Java" + "Script"); //javascript

// console.log(" " + " "); //" " => empty string

// let sum = " " + 0; //0
// console.log(typeof sum); //string

// console.log("vinod" - "thapa"); //nan

//ture = 1
//false = 0

// console.log(true + true); //2

// console.log(true + 3); //4

// console.log(true + false); //1

// console.log(false + true);  //1

// console.log(false - true); //-1

// console.log("string" + true) //stringtrue

// console.log("string" - true) //NaN
