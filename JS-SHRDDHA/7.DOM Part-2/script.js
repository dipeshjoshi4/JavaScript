console.log("welcome DOM Part-2");

///------------------------------------
//getAttribute => to get attribute
///------------------------------------

// let div = document.querySelector("div");
// console.log(div);

// console.log(div.getAttribute("class"));

// let className = div.getAttribute("class");
// console.log(className);

///------------------------------------
//setAttribute => to set attribute and his value
///------------------------------------

// let paraName = document.querySelector("p");
// console.log(paraName);

// paraName.setAttribute("class", "paraclass");

// console.log(paraName.getAttribute("class"))

///------------------------------------
//node.style => to change style
///------------------------------------

// let div = document.querySelector("div");
// console.log(div);
// console.log(div.style);
//div.style gives inline style object

//for change the css property

// div.style.backgroundColor = "green";
// div.style.fontSize = "35px";
// div.style.visibility = "hidden";

///------------------------------------
//Insert Element
//2 step process -if u want to add button(element)
// 1.create button
// 2.add element
///-----------------------------------

//insert element in which place

//1.node.append(el) => adds at the end of node(inside)

//2.node.prepend(el) => adds at the start of node(inside)

//3.node.before(el) => adds before the node(outside)

//4.node.after(el) =>adds after the node(outside)

// 1.create button
// let newBtn = document.createElement("button"); //create element
// newBtn.innerText = "click me!"; //make a fill in element
// console.log(newBtn); //show the element

// 2.add element
// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

///1. make a heading in itallic in the page

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>this is new heading</i>";
// document.querySelector("body").prepend(newHeading);

//2.make para and add after ul

// let para = document.createElement("p");
// para.innerText = "this is para";
// document.querySelector("ul").before(para);

// let delpara = document.querySelector("p");
// delpara.remove();

// newHeading.remove();

///appendchild
///remove child
