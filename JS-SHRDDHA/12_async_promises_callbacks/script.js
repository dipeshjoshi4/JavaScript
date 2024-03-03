console.log("callback_promise_async_await");

//--------------------------------------------------------------------------------------------------
//-------------------------callback_callbackHell_promise_promiseChaining_async_await----------------
//--------------------------------------------------------------------------------------------------

//async await >> promise chains >> callback hell

//-------------------async programing--------------------------

//synchronous in js

//synchronous means the code runs in a particular sequence of instruction given in the program . each instriuction wait for the previous instruction to complete its execution

//Example:1
// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous in js

//due the synchronous programming,sometime imp instruction get blocked due to some previous instruction,which causes a delay in the UI.asynchronous code execution allows to execute next instructions immediately and doesn't block the flow

//Example:

//Example:1

// function hello() {
//   console.log("hello");
//   }
// setTimeout(hello, 4000);

//Example:2

// setTimeout(() => {
//   console.log("Hi");
// }, 3000);

//Example:3

// console.log("one");
// console.log("two");

// setTimeout(() => {
//   console.log(" Aync Hi");
// }, 4000);

// console.log("three");
// console.log("four");

//-------------------Callbacks--------------------------

//- a callback is a function pass as an argumnet to another function
