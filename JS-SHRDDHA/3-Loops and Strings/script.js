console.log("lecture-3-loops and strings");

//loops
//loops are used to execute a piece of code again and again

//for
//while
//do...while

//for loops

//1
// for (let count = 1; count <= 5; count++) {
//   console.log("dipesh");
// }
// console.log("loops has ended");

//2 calculate sum 1 to n

// let sum = 0;
// let n = prompt("enter the number");

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//   console.log("i = ", i);
// }
// console.log("loops has ended");

//do...while

// let i = 1;
// do {
//   console.log("i = ", i);
//   i++;
// } while (i <= 5);

//while loop

// let i = 1;
// while (i <= 10) {
//   console.log("i = ", i);
//   i++;
// }

//for-of loop || //for-in loop => for string & array

//----------------------------------------------
//for-of loop => array & string
//----------------------------------------------

//SYNTAX

// for (let variable of string-variables) {
//do some work
// }

// let str = "HTML";
// let spellingLength = 0;
// for (let value of str) {
//   console.log(value);
//   spellingLength++;
// }
// console.log("the length is : ", spellingLength);

//----------------------------------------------
//for-in loop => Object,array
//----------------------------------------------

//SYNTAX

// for (let key in object - variables) {
//     do some work
// }

// let student = {
//   fName: "rahul kumar",
//   age: 20,
//   cgpa: 7.8,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key = ", key, "value = ", student[key]);
// }

//----------------------------------------------
//PRACTISE QUESTION
//----------------------------------------------

//1. print all the even number from 0 to 100

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     //even number
//     console.log("Number : ", num);
//   }
// }

//2. create game where u put random number and take user to give correct number by guessing until use enetr the same value

// let gameNumber = 23;
// let userNumber = prompt("guess the Number : ");

// while (gameNumber != userNumber) {
//   userNumber = prompt("wrong guess!!! guess Again");
// }
// console.log(" Congrats!!! You choose Right Number");
