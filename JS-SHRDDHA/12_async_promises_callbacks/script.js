console.log("callback_promise_async_await");

//--------------------------------------------------------------------------------------------------
//-------------------------callback_callbackHell_promise_promiseChaining_async_await----------------
//--------------------------------------------------------------------------------------------------
//////////////////////////////////////////
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

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

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



// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       console.log("getting data4...");
//       getData(4);
//     });
//   });
// });

// - this tsyle of programing difficult to understand and manage

//--------------------------------------------------------------------------------------------------
//-----------------------------------------------Promises Basic---------------------------------------
//--------------------------------------------------------------------------------------------------

// callback is using in nested format and get callbackhell problem and now solution of callback hell we get the promises

// Promise is for "eventual" completion of task.it is an object in JS.its a solution to callbackhell

// let promise = new Promise((resolve, reject) => { })      //-------------------function with two handlers

//resolve & rejct will be callback provider

//promise have 3 state => pending || fullfilled(resolved) || rejcted


// let promise = new Promise((resolve, reject) => {
//   console.log("success");
//   resolve("success got it");
// })
// console.log(promise) //promisestate => fullfilled

// let promise2 = new Promise((resolve, reject) => {
//   console.log("error");
//   reject("error got it")
// })
// console.log(promise2); //promisestate => rejected

// let promise3 = new Promise((resolve, reject) => {
//   console.log(123)
// })
// console.log(promise3);  //promisestate => pending


//promise object | 3 result |resolve and reject -handler |with this we can gerenate final result or error
//when we request api for data then the api give us promisereturn and then promise se data and result and state niklta hai


//-----------------------GENERAL PROGRAMMING JS USE of Promise -------------------------------------

// function getData(dataid, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//       // if (getNextData) {
//       //   getNextData()
//       // }
//     }, 5000)
//   });
// }

//do this in console to Show Above Result for clearity and understanding
// let promise = getData(1);
// promise => pending
// answer will be print
// promise => success


//A JS Promise Object can be
 //- pending : the result is undefined
 //- resolve : the result have some value (fulfilled)  // resolve(result)
 //- reject : the result is error object               // rejcet(error)


//-----------------------------------------------------------------------------------------------------
 //we learn how promise will be worked,but API give the promise we just have to handled 
 //Promise onece we get how we can use of promise get data or play with them fot hat we have two method 
 
//  ||promise.then((res)=>{})   //fullfilled
//  ||promise.catch((err)=>{})



//FOR RESOLVE PROMISE

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am promise");
//     resolve("success");
//   });
// }

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled",res)
// })

//FOR REJECT PROMISE

// const promise1Fun = () => {
//   return new Promise((resolev, reject) => {
//     console.log("i am promise1");
//     reject("network error show")
//   })
// }

// let promise1ans = promise1Fun()
//   promise1ans.catch((err) => {
//   console.log("promise reject",err)
// })

//--------------------------------------------------------------------------------------------------
//-----------------------------------------------Promises_Chaining----------------------------------
//--------------------------------------------------------------------------------------------------

//let assume we have some async function like this below

// function asynFunc() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Data-1")
//       resolve("success ")
//     },4000)
//   })
// }

// console.log("fetching data 1...")

// let p1 = asynFunc();
// p1.then((res) => {
//   console.log(res)
// })

//the nromal way of runing promises but we have to do only last part of the promise so that we can get our data from the promise

//now want the first username check and then password check .so i am doing first data 1 and then data 2

// function asynFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data-1");
//       resolve("success ");
//     }, 4000);
//   });
// }

// function asynFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data-2");
//       resolve("success ");
//     }, 4000);
//   });
// }

//  console.log("fetching data 1...");
// let p1 = asynFunc1();
// p1.then((res) => {
//  console.log("fetching data 2...");
//   let p2 = asynFunc2();
//   p2.then((res) => { })
// });

///we can simplifying above function like this too

//  console.log("fetching data 1...");
//  asynFunc1().then((res) => {
//    console.log("fetching data 2...");
//    asynFunc2().then((res) => {});
//  });


//---------------------------------------THIS IS FOR MY PRACTISE OF ABOVE EXAMPLE ------------------------------------------------

/*

function asynFunction1() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("data-1")
      resolve("data-1 got success")
    },4000)
  })
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data-2")
      resolve("data-2 got success")
    },4000)
  })
}


console.log("fetching data-1......")
asynFunction1().then((res) => {
  console.log(res)
    console.log("fetching data-2......");
  asyncFunction2().then((res) => {
    console.log(res)
  });
})

*/

//---------------------------------------THIS IS FOR MY PRACTISE OF ABOVE EXAMPLE ------------------------------------------------


//IN STARTING CALLBACK HELL CODE CONVERT INTO PROMISING CHAINING

//CALLBACK HELL SOLUTION WICH IS COMPLEX AND NOT EASY UNDERSTAND
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       console.log("getting data4...");
//       getData(4);
//     });
//   });
// });

//Our Promise SOLUTION

// function getData(dataId /*getNextData*/) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success")
//       // if (getNextData) {
//       //   getNextData();
//       // }
//     }, 3000);
//   })
// }

//optimize -2
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res) => {
//       console.log(res)
//     })
//   })
// })

//otimize-3

// console.log("getting data-1...............")
// getData(1)
//   .then((res) => {
//     console.log("getting data-2...............");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("getting data-3...............");
//     return getData(3)
//   })
//   .then((res) => {
//     console.log("getting data-4...............");
//     return getData(4)
//   })
//   .then((res) => {
//      console.log(res);
//   })
  

//--------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------Aync Await-----------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

// async function always returns a promise
// async keyword use with function 
// awaits pause the execution of its surriunding async function untill the promise is settled

//syntax
// async function myFunc(){}

//EXAMPLE-1

// function api() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("wether data");
//       resolve(200)
//     },2000)
//   })
// }

// await api(); //want to call promise by this awiat only use in async function in so we write like this
// async function getWeatherData() {
//   await api(); //untill this call nothing below this executed so we can execute other promise but one by one
//   await api()
// }
// console.log(getWeatherData());

//EXAMPLE-2
function getData(dataId ) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success")
    }, 2000);
  })
}

// async function getAllData() {
//   console.log("getting wait for data-1.........")
//   await getData(1);
//   console.log("getting wait for data-2.........");
//   await getData(2);
//   console.log("getting wait for data-3.........");
//   await getData(3);
//   console.log("getting wait for data-4.........");
//   await getData(4);
// }

// console.log(getAllData());

//=> so in async await wee need to call for the run program function call needed for that once we have to use

//IIFE => immediately invoked function expression
//IIFE IS FUNCTION THAT IS CALL TO IMMEDIATELY AFTER THE DEFINE
//IIFE is use only once

// syntax

//all 3 syntax bu there is NO FUNCTION NAME IN IIFE SYNTAX
//1.(func)()
//2.(()=>{})()
//3.(async func)()

//example

// (async function () {
//   console.log("getting wait for data-1.........")
//   await getData(1);
//   console.log("getting wait for data-2.........");
//   await getData(2);
//   console.log("getting wait for data-3.........");
//   await getData(3);
//   console.log("getting wait for data-4.........");
//   await getData(4);
// }) ()

