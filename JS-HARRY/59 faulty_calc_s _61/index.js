/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random);
let a = Number(prompt("give number a"));
let c = prompt("operation");
let b = Number(prompt("give number b"));

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  //perform correct
  console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);
  // console.log(`${eval(`${a} ${c} ${b}`)}`);
} else {
  // perform wrong
  c = obj[c];
  console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);
}

/*
if (random > 0.1) {
perform correct
console.log("Addition Calculation : ", a + b);
console.log("Subtraction Calculation : ", a * b);
console.log("Multiplication Calculation : ", a - b);
console.log("Division Calculation : ", a / b);
} else {
perform wrong
console.log("Addition Calculation : ", a - b);
console.log("Subtraction Calculation : ", a + b);
console.log("Multiplication Calculation : ", a / b);
console.log("Division Calculation : ", a ** b);
}
*/
