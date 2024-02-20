console.log("string");

//-------------------------------------------------------------------------------------------
let a = "dipesh";
console.log(a[0]); //d
console.log(a[1]); //i
console.log(a[2]); //p
console.log(a[3]); //e
console.log(a[4]); //s
console.log(a[5]); //h

//undefine where no string charcter have presence
console.log(a[6]); //undefined

//for length of string
console.log(a.length); //6

//-------------------------------------------------------------------------------------------
let fname = "dipesh";
let lname = "joshi";

//normal syntax for long string
console.log("my name is " + fname + " and my last name is " + lname);

//temlate literal syntax for long string
console.log(`my name is ${fname} and my last name is ${lname}`);

//LowerCase & UpperCase
let b = "shivam";
console.log(b.toLowerCase());
console.log(b.toUpperCase());

//slice method => end is not included
console.log(b.slice(1, 6)); //hivam
console.log(b.slice(1, 4)); //hiv
console.log(b.slice(1)); //hivam

//replace method
let Tname = "harry bhai";
console.log(Tname.replace("bhai", "7777"));
console.log(b.replace("sh", "777"));

//concat with previous string and new at the moment string
let x = "sachin";
let now = "kohli";
console.log(x.concat(now, "-gill"));
console.log(x.concat("-", now, "-gill"));

///STRINGS ARE IMMUTABLE

let language = "javascript";

//INDEXOF
let ans = language.indexOf("va");
let ans1 = language.indexOf("a");
console.log(ans); //1
console.log(ans1); //2

//STARTWITH & ENDSWITH
let ans3 = language.startsWith("ja");
let ans4 = language.endsWith("pt");
console.log(ans3); //true
console.log(ans4); //true

//CHARAT

let ans5 = language.charAt(0);
let ans6 = language.charAt(1);
console.log(ans5); //j
console.log(ans6); //a
