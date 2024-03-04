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

//--------------------------------------------------------------------------------------------------
//------------------------------------callback_callbackHell_---------------------------------------
//--------------------------------------------------------------------------------------------------

//- a callback is a function pass as an argumnet to another function
// - most of time its use for the delay of data

//Synchronous callback

// function sum(a, b) {
//   console.log(a + b);
// }
// function calc(a, b, sumcallback) {
//   sumcallback(a, b);
// }
// calc(1, 2, sum);

//Asynchronous callback

// const hello = () => {
//   console.log("hello");
// };
// setTimeout(hello, 3000);

//Callback Hell

// - its a problem that occur with the use of callback
// - Nested callbacks stacked below one another forming a pyramid structure.

//Example OF Callback

// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }

//Now iF i want a data one by one  then i can not do this

// getData(1); //2s
// getData(2); //2s
// getData(3); //2s

// => for every function is a setimeout so they start their own process call the next one and eventully all give answer at a sametime//but we need after one data get then other data process run

//like instagram//=> if write instgram user then and insta password then they serch in data base both same time.it check  one by one thats why when u write first place wrong user id that tells stop and user id doe not exist

// so one by one with some delay we have  need  to get our value.for that we use callbacks

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//- above after our getdata function done,then we pass another getnextdata function which give another value

//But we cant write like this because when there is argument and u want pass like this function value u have make arrow functin on that otherwise the next data value is printed first

// getData(1, getData(2));
//Insted write like below
// getData(1, () => {
//   getData(2);
// });

//so we got data after delay but there is getnextdata is not a function error because we dont check the condition so let put condition like if they have getnextdata() there then give getNextData()

//Now Supposed we have ned 4 data then we can do the same thing

//this is callbackHell => which is not understable at first and pro developers so that

getData(1, () => {
  console.log("getting data2...");
  getData(2, () => {
    console.log("getting data3...");
    getData(3, () => {
      console.log("getting data4...");
      getData(4);
    });
  });
});

// - this tsyle of programing difficult to understand and manage

//--------------------------------------------------------------------------------------------------
//-----------------------------------------------Promises---------------------------------------
//--------------------------------------------------------------------------------------------------

// callback is using in nested format and get callbackhell problem and now solution of callback hell we get the promises
