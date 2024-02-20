console.log("hello conditional");

//a fragment of code that produce a value is called on expression
//every value is written iterally is an expression for
//Ex:77 or "harry"

//1.Arithmatic Operators

//+  => addition
//-  => subtraction
//*  => multiplation
//** => exponentiation
// / => division
// % => modulas
//++ => increment
//-- => decrement

//2.assignment operators

// =   =>  x = y
// +=  =>  x = x+y
// -=  =>  x = x-y
// *=  =>  x = x*y
// /=  =>  x = x/y
// %=  =>  x = x%y
// **= =>  x = x**y

//3.comparison operators

// ==   equal to
/* !=   not equal*/
//===   equal value and type
/*  !==  not equal value and equal type  */
//> =>   greater then
//< =>   lesser then
//<= =>  lesser then and equal too
//>= =>  greater then and equal too
/* ?  => ternary operator */

// if...else conditional

// let age = 5;
// let grace = 3;

// age += grace; //8 age+grace
// console.log(age);

// age -= grace; //5 age-grace
// console.log(age);

// if (age + grace > 18) {
//   console.log(`you can drive because your age is  ${age + grace}`);
// } else {
//   console.log(`you can not drive because your age is  ${age + grace}`);
// }

// if (age + grace > 18) {
//   console.log(`you can drive because your age is  ${age + grace}`);
// } else {
//   console.log(`you can not drive because your age is  ${age + grace}`);
// }

// console.log(age * grace); //15 //multiplay
// console.log(age ** grace); //125 //5*5*5
// console.log(age ** grace * age); //625

// let a = 10;
// let b = 5;
// console.log(a / b); //2 //division
// console.log(a % b); //0 //r

//---------------------------------------------------------------
//practise set

//1.use logical operators to find whether the age of person lies between 10 and 20?

// let age = 50;
// if (age <= 10) {
//   console.log("under 10 or equal");
// } else if (age >= 10 && age <= 20) {
//   console.log("above 10 or less then 20");
// } else {
//   console.log("above 20");
// }

//2. demo of switch case in js

// let age = 20;
// switch (age > 18) {
//   case 1:
//     console.log("u can drive");
//     break;
//   case 2:
//     console.log("u can not drive");
//     break;
// }

//3.find a program that number is divisable by 2 and 3
// let a = 9;
// if (a % 2 == 0 && a % 3 == 0) {
//   console.log("divisable by 2 and 3 ");
// } else {
//   console.log("not divisable by 2 ");
// }

//4.find a program that number is divisable by 2 or 3
// let a = 12;
// if (a % 2 == 0) {
//   console.log("divisable by 2 ");
// } else if (a % 3 == 0) {
//   console.log(" divisable by 3 ");
// } else {
//   console.log("not divisable by 2 or 3");
// }

//5.print using ternary operator u can drive or not
// let age = 17;
// age >= 18 ? console.log("u can drive") : console.log("u can not drive");
