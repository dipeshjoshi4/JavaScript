console.log("welcom to string");

//-------------------------------
//string is the sequences of the charcters used to represent text
//two way to create string
//let str ="dipesh";
//let str2 = 'dipesh';
//strings have inbuilt function (called method)  & inbuilt properties(called varibles)

//-------------------------------
//inbuilt properties of string
//string.length
//str[0] -> we can access the actual postion charcter

// let str = "dipesh";
// console.log(str.length);
// console.log(str[0]);

//-------------------------------
//template Literals in JS
//a way to embedded expressionin strings `this is a template literal`

//string interpolation
//to create string by doing substitution of placeholders
//`string text ${expression/variables} string text`

//escape charcters
//=> gives snext line =>   \n
//=> tab space => \t

// console.log("js is \n good");
// console.log("js is not \t good");

//escape charter length will be count as 1
// let str = "js\tgood";
// console.log(str.length); //7

//-------------------------------
//STRING METHODS IN JS
// => THIS IS THE BUILT IN FUNCTION/METHODS TO MANIPULATE THE STRING
//ITS BLOCK OF CODE WHICH DO WORK FOR OUR
//IN JS STRING ARE iimutable

// let str = "dipesh";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

/* 
here this is give same string because the mehtod can not change the original string and that value
it gives us new string with new value
*/

//IN JS STRING ARE iimutable

// let str1 = "JOSHI";
// let newStr1 = str1.toLowerCase();
// console.log(str1);
// console.log(newStr1);

// str.trim() => its trim the space from the start and end

// let fullName = "      dipesh joshi    ";
// fullName = fullName.trim();
// console.log(fullName);

//str.slice(start,end) => return the part of string

// let numbers = "0123456789";
// console.log(numbers.slice(0, 4)); //0123

//str1.concat(str2) =>joins str2 with str1

// let str1 = "my name is dipesh";
// let str2 = " i am cureently freelancer ";
// let rest = str1 + str2;
// console.log(rest);
// console.log(str1.concat(str2));

//str.replace(searchVariables,newVaribles)

// let newString = "my lname is dipesh";
// console.log(newString.replace("l", "f"));

// let pronoun = "helplolo";
// console.log(pronoun.replace("lo", "p")); //helpplo
// console.log(pronoun.replaceAll("lo", "p")); //helppp

//str.charAt(idx)

// let str3 = "my name is dipesh";
// console.log(str3.charAt(11)); //d
// console.log(str3.charAt(1)); //y

let fullName = prompt("give me ur full name");

let postNumber = fullName.length;

let userNameSymbol = "@";

let userName = userNameSymbol.concat(fullName).concat(postNumber);
// let userName = userNameSymbol + fullName + postNumber;
console.log(userName);
