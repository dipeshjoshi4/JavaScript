//LOOPING THROUGH AN ARRAY
//array can be loop through using classical javascript for loop or through some other method discussed below

//for
// const a = [1, 93, 56, 5, 8];
// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   console.log(element);
// }

//1.forEach loop => calls a function forEach an array element

//SYNTAX
//  a.forEach((VALUE, index, array) => {
//  function logic
//  });

//gives the value index and that whole array

//example
// const a1 = [1, 22, 333, 4444, 55555];
// a1.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

//2.for in loop => for in loop  get the keys and values from the an array

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

//answer is => gives values and keys of object

// for (let key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(key, element);
//   }
// }

//3.for of loop => for of loop can be used to get the values from an array

// const a1 = [1, 22, 333, 4444, 55555];
// for (const i of a1) {
//   console.log(i);
// }

//4.array from => used to create an array from any other object
// array from ("harry")

let nameArr = Array.from("harry");
console.log(nameArr); // ['h','a','r','r','y'];

//---------------------------------------------

//5.map() => creating a new array by performing some operation on each array element

//SYNTAX
// a.map((value, index, array) => {
//   return value * value;
// });

//NORMAL FOR LOOP

// const arr = [1, 13, 5, 7, 11];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   newArr.push(element ** 2);
// }
// console.log(newArr);

//for the replacement of this we can use MAP //MAP

// const arr = [1, 13, 5, 7, 11];
// let newArr = arr.map((e) => {
//   return e ** 2;
// });
// console.log(newArr);

//---------------------------------------------

//6.filter() => filters an array with values that passes a test.create a new array
// const a = [1, 13, 5, 7, 11];
// const greaterthanseven = (e) => {
//   if (e > 7) {
//     return true;
//   } else {
//     return false;
//   }

//OR
// return e > 7 ? true : false;
// };

// console.log(a.filter(greaterthanseven));

//---------------------------------------------

//7.reduce() => reduce an array for a single value
const numbers = [1, 13, 5, 7, 11];
const add = (a, b) => {
  return a + b;
};
const sum = numbers.reduce(add);
console.log(sum);
