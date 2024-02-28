//-------------------Javascript Memoization,Cashing in JS-----------------

//Implementing Memoization in Javascript
//in react with use of hook u can do memoization

//Memoization is an optimization technique that can be used to reduce
//time-consuming calculation by saving previous input to something called cache and returning the result from it

//in a simple way
//there is any program in and running because of user request and the certain time take to run that program
//now whenevr the request again come from user to running the code .i dont want that the code is again run and give result .
//insted i want do share the before code runnig result which can i store in memory cache

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

console.time();
console.log(calc(5));
console.timeEnd();
