//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. 
//* It is a versatile and dynamic object.It can hold various data types, including numbers, strings, objects, and even other arrays.
//* Arrays in JavaScript are zero - indexed
//* i.e.the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================+
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
// let fruits = new Array("orange", "apple", "banana");
// console.log(fruits);

//? Using array literal
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);
// console.log(fruits[0]);

//? find the positions in array
// const persons = ["ram", "hari", "sita", "Bishal", "gita"];
// console.log(persons[0]); //ram
// console.log(persons.at(0)) //ram
// console.log(persons.at(-1)); //gita
// console.log(persons[-1]); //ERROR

//? length
// const persons = ["ram", "hari", "sita", "Bishal", "gita"];
// console.log(persons.length);//5

// const arr = [];
// console.log(arr.length) //0

//? we can also create an empty array
// let arr = [];
// console.log(arr);
// console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================

//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[3]); //Undefined
// console.log(fruits["apple"]); //undefined

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// for (let item of fruits) {
//     console.log(item);
// }

// for (let item = 0; item < fruits.length; item++) {
//     console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for (let item in fruits) {
//     console.log(item)
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array.
//* The provided function may perform any kind of operation on the elements of the given array.

//? syntax

//Traditional Function
// arrayname.forEach(callbackfunction(currentvalue,index,array){},thisvalue) 

//fatArrow Function
// arrayname.forEach( (currentvalue,index,array) => { },thisvalue) 

// fruits.forEach((currEle, index, arr) => {
//     console.log(`${currEle} ${index}`)      //give a for of and for in loop answer in forEach
//     console.log(arr);                       ///given array for each iteration
// })


// const myForEachArr = fruits.forEach((curElem, index, arr) => {
//   return `${curElem} ${index}`;
// });
// console.log(myForEachArr); //undefined

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

//? syntax

//Traditional Function
// arrayname.forEach(callbackfunction(currentvalue,index,array){},thisvalue) 
//fatArrow Function
// arrayname.forEach( (currentvalue,index,array) => { },thisvalue) 


// fruits.map((currEle, index, arr) => {
//     console.log(`${currEle} ${index}`)      //give a for of and for in loop answer in forEach
//     console.log(arr);                       ///given array for each iteration
// })

// const myMapArr = fruits.map((curElem, index, arr) => {
//     return ` my fav fruit is ${curElem}  `;
// });
// console.log(myMapArr); //get proper new array answer
// console.log(fruits); //our old array


//! difference between forEach and map function

//? 1- never return value forEach by store in variable
// - forEach store in variable and then never return the value its return undefined
// - map function can store in variable and its return value

//? 2- return new array by map store in variable
//- where forEach never return value 
//- when you want new array then simply just use map function and store in variables and that gives new array

//? 3- also old array will be same in Map
// -map give new array and not mutated old data


//?--------------------------------------------------------------------------------------------------

//! Practice Time
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

//! write a program to Multiply each element with 2

//?WITH FOREACH
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((curElem) => {
//     console.log((curElem * 2));  //Performs an action on each element
// });
//ANSWER => 2 4 6 8 10

//?WITH MAP
// const numbers = [1, 2, 3, 4, 5];
// const doubleValue = numbers.map((curElem) => {
//   return curElem * 2;  //Creates a new array with transformed elements
// });
// console.log(doubleValue);
//ANSWER => [2, 4, 6, 8, 10]


//?--------------------------------------------------------------------------------------------------


//* Key Differences

//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, 
//? such as modifying the array or performing a task for each element.
//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.
//? map: Since it returns a new array, you can chain other array methods after using map.

//! Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.
//? map: Used when you want to create a new array based on the transformation of each element in the original array.

//* ========================================================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ========================================================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava","lichi")); //7
// console.log(fruits);
// The push() method returns the new length.

//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop()); //banana
// console.log(fruits); 

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava","amrud")); //7
// console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift()); //apples
// console.log(fruits);

//* ========================================================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ========================================================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing ele. and/or adding new ele. in place

//? it chnages means mutate the original array

//* syntax
//? splice(where-to-start||| how-many-delete(count) |||which-item-want-to-add)
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)

// let fruits = ["apple", "orange", "banana", "mango"];

//! starting point
// console.log(fruits.splice()); //[]
// console.log(fruits.splice(1)); //orange ,bannaa ,mango
// console.log(fruits.splice(0)); //apple,orange ,bannaa ,mango

//!delete orange-add grapes
// console.log(fruits.splice(1, 1, "grapes"));
// console.log(fruits)

//! delte banna and add grapes and lemon then delet grapes and mango
// console.log(fruits.splice(2, 1, "lemon", "grapes")); //banana
// console.log(fruits); //apple,orNage,lemon,grapes,mango
// console.log(fruits.splice(3, 2)); // grapes,mango
// console.log(fruits); //apple,orange,lemon


//! what if you want to add the element at the end
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(3, 1, "lemon");
// console.log(fruits);

//! what if you want to add the element at the end
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 0, "grapes");
// console.log(fruits);

//! without delte anything add 
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(-1, 1, "grapes");
// console.log(fruits);

//* =========================================
//*  Searching in an Array
//* =========================================

//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.indexOf(6);
// console.log(result);
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);
// const result = numbers.indexOf(6, 5);
// console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(5);
// console.log(result);

//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

//! 1
// months.splice(months.length, 0, "dec")
// console.log(months);

//! 2:
// When used to add elements, the splice method returns an empty array ([]).


//! 3
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// console.log(months);

//! 4
// const indexOfUpdate = months.indexOf("June");
// months.splice(indexOfUpdate, 1);
// console.log(months);


//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

//? not given data in array just a number

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// const result = numbers.find((currEle) => {
//     return currEle > 6;
// })
// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

//? if the element is satissy the conditions then it will give proper index number otherwise give a -1

//? Example-1
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// const result = numbers.findIndex((currEle) => {
//     return currEle > 2;
// })
// console.log(result);

//? Example-2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const resultMap = numbers.map((currEle) => currEle * 5)
// console.log(resultMap);

// const resultFindIndex = resultMap.findIndex((currEle) => {
//     return currEle > 25;
// })

// console.log(resultFindIndex);

//? 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.

//? syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });

// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updatedCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });

// console.log(updatedCart);

// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// // Filter products with a price less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//   //   console.log(curElem.price <= 500);
//   return curElem.price <= 500;
// });
// console.log(filterProducts);

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//   //   console.log(index);
//   //   console.log(arr.indexOf(curElem));
//   return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues);
// console.log([...new Set(numbers)]);

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

// console.log(numbers);

//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
//  if(b>a) return -1  => keep the order

// numbers.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });
//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
const words = ["APPLE", "banana", "cherry", "date"];

// const result = words.map((curElem) => {
//   return curElem.toLowerCase();
// });

// console.log(result);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map((curElem) => {
//     if (curElem % 2 === 0) {
//       return curElem * curElem;
//     }
//   })
//   .filter((curElem) => curElem !== undefined);

// console.log(result);

// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//   .filter((curElem) => curElem !== undefined);

// console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["ram", "vinod", "laxman"];
// const prefixName = names.map((curName) => `Mr. ${curName}`);
// console.log(prefixName);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

// const productPrice = [100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((accum, curElem) => {
//   return accum + curElem;
// }, 0);

// console.log(totalPrice);

//some question

//! 1
// let x = "HELLO";
// let y = "WORLD";
// console.log(x + " " + y) // hello world

//! 2
// let sum = 0;
// const a = [1, 2, 3];

// a.forEach(getSum);
// console.log(sum);
// function getSum(el) {
//     sum += el;
// }        //6 is answer
