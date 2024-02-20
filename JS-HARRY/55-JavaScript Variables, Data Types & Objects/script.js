// console.log("helloow worldd");

// var a = 5;
// var b = 6;
// var c = "dipesh";
// console.log(a + b); //11
// console.log(b + c); //6dipesh
// console.log(typeof a, typeof b, typeof c); //number number string

// var a = 5;
// {
//   let a = 10;
//   console.log(a); //10
// }
// console.log(a); //5

// var b = 20;
// {
//   var b = 10;
//   console.log(b); //10
// }
// console.log(b); //10

//primitive datatypes are the bsiac datattyoes of js and its abuilding block of of non-primitive datatypes
//null number boolean string symbolBigInT UNDEFINED

//EXAMPLES
// let x = "harry"; //string
// let y = 355; //number
// let z = 3.55; //number
// let p = true; //boolean
// let q = null; //object
// let d = undefined; //undefined
// let xy; //undefined

// console.log(x, y, z, p, q, d, xy);
// console.log(
//   typeof x,
//   typeof y,
//   typeof z,
//   typeof p,
//   typeof q,
//   typeof d,
//   typeof xy
// );

//OBJECT -NON PRIMITIVES

// -------------------
///practise set
// -------------------

//1-create a variable of type string and try to add a number to it

// var l = "dipesh";
// var num = 5;
// console.log(l + num); //dipesh5
// console.log(typeof (l + num)); //string
// console.log(+l + num); //NaN
// console.log(typeof (+l + num)); //number

//ALWAYS ONE EXPONTIAL CASE

// var item1 = 5; //number
// var item2 = "7"; //string
// console.log(item1 + item2); //57
// console.log(typeof (item1 + item2)); //string
// console.log(item1 + +item2); //12
// console.log(typeof (item1 + +item2)); //number

//2-use typeof opeerator to find to datatype of the string in last question

// var l = "dipesh";
// var num = 5;
// console.log(l + num);
// console.log(typeof (l + num)); //string

//3-create a const object in javascript can you chnage it to hold a number later?

// const myPersonal = {
//   myName: "dipesh",
//   is_Handsome: "YES",
// };
// console.log(myPersonal);
// myPersonal.numberLatter = 5;
// myPersonal.myName = 5555;
// console.log(myPersonal);

//4.try to add a new key  to the const object in problem 3.were you able to do it?
// const book = {
//   handsome: "beutifull",
//   false: "wrong",
//   truth: "right",
//   sorry: "pardon",
//   brave: "fearless",
// };
// book.smart = "wellBrain";
// console.log(book);

//5.write a js program to create a word-meaning dictionary of 5 words
// let dictinory = {
//   handsome: "beutifull",
//   false: "wrong",
//   truth: "right",
//   sorry: "pardon",
//   brave: "fearless",
// };
// console.log(dictinory);
