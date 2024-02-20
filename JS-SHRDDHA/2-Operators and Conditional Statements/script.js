console.log("lectur - 2");

//comments
//2-Operators and Conditional Statements

//operators
//a+b => expression
//here a & b =>operands
//here + => operator

//modulo operator => %
//5%2 => 2 => quesont || 1 => reminder

//exponentiation => **
//a ** b => a to power b
//5 ** 2 => 5*5

//operator that need only one operand =>unary operator
//increment => i++ => i = i+1
//decrement => i-- => i = i-1

//++a || --a => pre

//pre
// let a = 5;
// console.log(a); //5
// console.log("--a = ", --a); //4
// console.log(a); //4
//----------------------------------------------
// let x = 5;
// console.log(x); //5
// console.log("++x = ", ++x); //6
// console.log(x); //6
//----------------------------------------------
//post
// let b = 5;
// console.log(b); //5
// console.log("b++ = ", b++); //5
// console.log(b); //6
//----------------------------------------------
// let y = 5;
// console.log(y); //5
// console.log("y-- = ", y--); //5
// console.log(y); //4
//----------------------------------------------

//----------------------------------------------
///Assignment Operators
//----------------------------------------------

// let a = 5;

// a += 4;
// console.log("a =", a); //9

// a -= 4;
// console.log("a =", a); //1

// a *= 4;
// console.log("a =", a); //20

// a /= 4; //a = a/4
// console.log("a =", a); //1.25

// a %= 4;
// console.log("a =", a); //1

// a **= 4; // 5**4 => 5*5*5*5
// console.log("a =", a); //625

//----------------------------------------------
//Comparison Operators
//----------------------------------------------

// evaulted one value with other value

//equal too ==

//not equal !=

//equal to & type ===

//

// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b); //false

// console.log("5 == 5", a == 5); //true

// console.log("5 != 2", a != b); //true

// let x = 5;
// let y = "5";
// console.log("5 === '5' ", x === y); //false

// >   >=    <  <=

// let p = 5;
// let q = 6;
// let r = 5;

// console.log("5 < 6 = ", p < q); //true
// console.log("5 < 5 = ", p < r); //false
// console.log("p <= r = ", p <= r); //true
// console.log("p >= r = ", p >= r); //true

//----------------------------------------------
//Logical Operators
//----------------------------------------------

//multiple expression evualted and then give final answer

//logical AND  &&

// let a = 6;
// let b = 5;

// let cond1 = a > b; //true
// let cond2 = a > 5; //true
// console.log(cond1 && cond2); //true

// let cond3 = a > b; //true
// let cond4 = b > a; //false
// console.log(cond3 && cond4); //false

//logical OR ||

// let cond5 = a > b; //true
// let cond6 = b > a; //false
// console.log(cond5 || cond6); //true

// let cond7 = a > b; //true
// let cond8 = a > 5; //true
// console.log(cond7 || cond8); //true

// let cond9 = a < b; //false
// let cond10 = 4 > b; //false
// console.log(cond9 || cond10); //false

//logical NOT !

// console.log(!(cond7 || cond8)); //false

//----------------------------------------------
//conditional statement
//----------------------------------------------

//question-1-get user to input anumber using prompt("enter a number")
//and check the number will be multiple of 5 or not

// let num = prompt("enter the number");
// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5");
// } else {
//   console.log(num, "is not a multiple of 5");
// }

//question-2-write a vode which gives grades to student as per their scores

// let score = 49;

// if (score >= 80 && score <= 100) {
//   console.log("student score", score, "and get grades A");
// } else if (score >= 70 && score <= 79) {
//   console.log("student score", score, "and get grades B");
// } else if (score >= 60 && score <= 69) {
//   console.log("student score", score, "and get grades C");
// } else if (score >= 50 && score <= 59) {
//   console.log("student score", score, "and get grades D");
// } else {
//   console.log("student score", score, "and get grades F");
// }
