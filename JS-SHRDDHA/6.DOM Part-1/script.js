console.log("welcom DOM Part-1");

//window object :
//- its a global object with lots of properties and method
//- Example : console.log(),alert,prompt all are writtern like this. =>alert() | window.prompt() | windo.console.log()
//- window object represent an open window in browser.its a browser object not a js object and its automatically created by browser

//DOM:document object modal.when the web pages created the DOM will be declare

//we can access the whole html code in js ......all html code will
// convert as object and that special object called document

//window -> document -> html
//console.dir(window.document)

//console.log => print => for dom element

//console.dir => special object like document  => used to print and document object properties and method
//console.dir(window.document)

//DOM Manipulation

//selecting with id => document.getElementById("idName")

// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading); //object

//selecting with class => document.getElementsByClassName("className")

// let headings = document.getElementsByClassName("heading-class");
// console.log(headings);
// console.dir(headings); //html collection means array

//where there is no class element and still we want to acheive then its print => html collection /empty array
//where there is no id element and still we want to acheive then its print => null /object

//selecting with tag => document.getElementsByTagName("TagName")
// let para = document.getElementsByTagName("p");
// console.dir(para); //array /html collection

//document query selector

//document.queryselector("#myid",".myclass","tag")
//returns first element

// let firstElement = document.querySelector("p");
// console.dir(firstElement);

//document.queryselectorAll("#myid/.myclass/tag") //nodelist(every indvidual thing in dom)

// let elements = document.querySelectorAll("p");
// console.dir(elements);

//in id query selctorall cant make sense

//---------------------------------------
//DOM Manipulation Properties Access get and set we can doo:
//---------------------------------------

///////////////////
//tagName : returns tag for element nodes

// let btn = document.querySelector("button");
// console.dir(btn);
// console.log(btn.tagName);

// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.tagName);

// let heads = document.querySelector("#heading");
// console.dir(heads);
// console.log(heads.tagName);

// let answer = document.querySelector("#para4");
// console.log(answer.firstChild.nodeName);
// console.log(answer.lastChild.nodeName);

/////////////////////
//innerText : returns the text content of the element and its children
// let div = document.querySelector(".newDiv");
// console.dir(div); //gives an object
// console.log(div.innerText); //textual content

/////////////////////
//innerHTML : returns the plain text or HTML contents in the element
// console.log(div.innerText); //textual content with html tag

/////////////////////
//textContent : returns textual content even for hidden elements
//get and then set

//practise question

//question-1.creat h2 make write hello js and then add some tecxt in it

//1st way answer
// let heading = document.querySelector("h2");
// console.log((heading.textContent = "hello javascript from apna collage students"));

//2nd way
// let heading = document.querySelector("h2");
// console.log(heading.innerText);
// heading.innerText = heading.innerText + " from apna collage student";

//question-2.make 3 div with common class box .acces sand add some unique text in each

//1st way answer
// let divs = document.querySelectorAll(".box");
// console.log(divs);
// let idx = 1;
// for (value of divs) {
//   value.innerText = `mine ${idx} div`;
//   idx++;
// }

//2nd way answer
// let divs = document.querySelectorAll(".box");
// console.log(divs);
//acces- get
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
//add -set
// console.log((divs[0].innerText = "mine 1st div"));
// console.log((divs[1].innerText = "mine 2nd div"));
// console.log((divs[2].innerText = "mine 3rd div"));
