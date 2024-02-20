//inline event handling

// <button onclick="console.log('dipesh')">on click</button>
// <button onclick="alert('hello')">on click 2x</button>

//event handling in js

//SYNTAX

//  node.event = () => {
//    handle here
//  };

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };

// let box = document.querySelector(".box");
// box.onmouseover = () => {
//   div.style.backgroundColor = "purple";
// };

//proprity in event handling

// 1.inline event handling  <<<<<<<<< event handling in js
// 2.the last handling event is more power in same element means
// btn1 first event << btn2 last event
// Example

//1
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };

//2
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 26;
//   a++;
//   console.log(a);
// };

///---------------------------------------------
//EVENT OBJECT
//- it is a special object that have all the details about the event
//- details like kis type ka event , event ka target,
//- all event handlers have across to the event object's properties and methods
//- we can get additional info about event with the help of passing event object in event

//SYNTAX

//   node.event = (e) => {
//       handle here
//    }

// e.target, e.type , e.clientX , e.clientY

//EXAMPLE
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseenter = () => {
//   console.log("enter the mouse");
// };

///---------------------------------------------
//EVENT LISTENERS
//- one type of event handler(callback is a handler)
//- event listner -> function who listen event => for one event we can we can do multiple work

//event handling =>
//1.inline in html -> drawback html code bulcky
//2.in js with node and arrow function -> drawback is at time one event
//3.event listner -> function who listen event => for one event we can we can do multiple work

//with event listnear we can add multipal event can trigger on same element or same event

//SYNTAX
// node.addEventListener(event,callback) //callback ist handler
// node.removeEventListener(event,callback)

//NOTE : THE CALLBACK REFERENCE SHOULD BE SAME TO REMOVE

//ADD-EVENTLISNEAR

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (e) => {
//   console.log("button was clicked");
//   console.log(e);
//   console.log(e.type);
// });

// btn1.addEventListener("click", (e) => {
//   console.log("button was clicked 2nd time");
//   console.log(e);
// });

//REMOVE-EVENTLISNEAR

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  console.log("button was clicked - handler-1");
});

btn1.addEventListener("click", () => {
  console.log("button was clicked - handler-2");
});

btn1.addEventListener("click", () => {
  console.log("button was clicked - handler-4");
});

const handler3 = () => {
  console.log("button was clicked - handler-3 ");
};
btn1.addEventListener("click", handler3);

// suppose i want to remove handler 3 function i have to given variable to handler 3 and then remove because for remove function we have to add that function into one variable

//let me explain in detail if there is 2 function in code and they both work same then it doesnt mean they both is same .its just they both have ssame work or cosnole statement.they both have different adress for storage

btn1.removeEventListener("click", handler3);
