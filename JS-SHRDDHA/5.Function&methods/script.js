console.log("welcome to function lecture-5");

//function - block of code that performs a specific task.  which we can invoked/called whenever needed
//saved from repetation which is called redadtion

// function myFunction() {
//   console.log("welcome to apna collage");
//   console.log("we are learning js");
// }
// myFunction();

//parameter in function
//-> its used as input or any msg check this example

//1st example
// function messaging(msgtext) {            //parameter in function defination
//   console.log(msgtext);
// }
// messaging("i love js");                  //argument in function called
// messaging("i love mrunal");

//2nd example-> sum of 2 numbers
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(3, 4);

//3rd Example-> return some value

// function sum(x, y) {
//   s = x + y;
//   console.log("before return");
//   return s;
//   console.log("before return");
// }
// let answer = sum(3, 4);
// console.log(answer);

// console.log(x);

//notes
//its says x is not defined. so function parameter will be in function local scope
// return valued will be only one
// after "return statement" code in function is unreachble

//---------------
//Arrow Function - compact way of writing a function

//sum function (NORMAL)
// function sum(a, b) {
//   return a + b;
// }

//sum function (as ARROW FUNCTION)
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };

//multipication function (NORMAL)
// function mul(a, b) {
//   return a * b;
// }

//multipication function (as ARROW FUNCTION)
// const arrowMul = (a, b) => {
//   return a * b;
// };

//Notes
//- arrow function is right side of part
//- where arrowMul,arrowSum will be the function variable
//- we can write without pernthiss for some work
//- we can remove curly bras to when oly on line of work

//one way to write
// const printHello = () => {
//   console.log("hello");
// };

//second way to write
// const printHello = () => console.log("hello");

//----------------------------------------------------
//PRACTISE QUESTION

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// countVowels("DiPesh");
// console.log(countVowels("DiPesh"));

//same in arrow function
// let answerInArrow = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// answerInArrow("aaa");

//----------------------------------------------------
//FOR EACH LOOP IN ARRAYS

// array.forEach((element) => {});
//callback function : its a function to execute to for each element in the array
// a callback is function passed as an argument to another function

//WHAT IS METHOD AND FUNCTION
//METHOD : WHEN U HAVE A FUNCTION BIND WITH ANY DATA STURCTURE OR OBJECT ITS CALLED METHOD
//JUST LIKE AS EXAMPLE "STRING".TOUPPERCASE();
//HERE FOREACH IS loop but its bind with data sturcture like array so its called method

//syntax
// array.forEach(callback function);
// array.forEach((element) => {});

//EXAMPLE
// let arr = [1, 2, 3, 4, 5];
// let arr = ["pune", "mumbai", "delhi"];

//here forEach automatically gives value after define the function
//  arr.forEach(function printValue(val) {
//   console.log(val);
// });

//for the uppercase
// arr.forEach(function printValue(val) {
//   console.log(val.toUpperCase());
// });

//generally we give callback function at defining as arrow function so...
// arr.forEach((val) => {
//   console.log(val);
// });

///3 parmeter optional in call back => value || index ||array-it-self
// arr.forEach((val, idx, arr) => {
//   console.log(val, idx, arr);
// });

//HIGHER ORDER FUNCTION/METHOD : higher order function is take an parameter as function or its delivered the higher order function
//for each is one of the example

///practise question
// let square = [1, 2, 3, 4, 5, 6];
// square.forEach((val) => {
//   console.log(val * val);
// });

//another way to write callback function
// let square = [2, 3, 4, 5, 6];
// let calSquare = (val) => {
//   console.log(val * val);
// };
// square.forEach(calSquare);

//------------------------------------------------------------------------------------
// modern js => callback function/higherorder function -foreach,map,filter
//------------------------------------------------------------------------------------

///----------------------------
//SOME MORE ARRAY METHOD

///MAP :
//creats a new array with the results of some operation.the value its callback returns are used to form new array
//this method make easy working with the array values
//there is slight difference with map and foreach that is foreach gives same array where map give ur answer in new array

//SYNTAX
// Array.map(callbackfunction(value, index, array));
// let newarray = arr.map((val) => {
//   return val * 2;
// });

// let nums = [20, 25, 30];
//simple way
// nums.map((num) => {
//   console.log(num);
// });
//answer : 20,25,30

//to get newarray in answer
// let newArr = nums.map((num) => {
//   return num;
// });
// console.log(newArr);
//answer :(3) [20, 25, 30]

//FILTER:
//- CREATES A NEW ARRAY OF ELEMENTS THAT GIVE TRUE FOR CONDITION/FILTER

//EXAMPLE: ALL EVEN ELEMENTS

// let nums = [20, 22, 42, 5, 6, 4, 5, 48, 25];

// let evenNumber = nums.filter((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });

// console.log(evenNumber); //20,22,42,6,4,48

//REDUCE :
//- perform some operation & reduces the array to single value.it returns that single value

//sum of array
// let arr = [1, 2, 3, 4];
// let answer = arr.reduce((res, val) => {
//   return res + val;
// });
// console.log(answer);

//give maximu number
// let arr = [26, 254546, 22216, 254546];
// let answer = arr.reduce((res, val) => {
//   return res > val ? res : val;
// });
// console.log(answer);

///practise question

//give 90+ student
// let marks = [25, 70, 91, 95, 85, 92];
// let schoolar = marks.filter((mark) => {
//   return mark > 90;
// });
// console.log(schoolar);

//take n from user and make ana array till 1 to n
let n = prompt("give me number :");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log("our array is = ", arr);

//now reduce method use and make sum of array
let sum = arr.reduce((result, current) => {
  return result + current;
});
console.log("sum = ", sum);

//with reduce make a product of all number

let product = arr.reduce((result, current) => {
  return result * current;
});
console.log("product = ", product);

//product means factorial => 5! => 5*4*3*2*1
