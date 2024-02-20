// lecture-11-class & objects (Apna Collage)

//Object Oriented Programming

//------------------------------------------------------------------------------------------------
//prototype in js
// a js object is an entity having state and behavior(properties and method)
// js objects have a special property called prototype
// we can see every object have their own property its called prototype => _ _proto_ _
// prototype itself is object and its have different properties and methods
// means in an object that is btdefault object which have some special properties

//-------------------------------------------------------------------------------------------------
//direct way to create an object
// const student = {
//   studName: "shrddha khapra",             //-------------------------------------------state,key-value pairs,properties
//   marks: 94.4,
//   printmark: function () {               //-------------------------------------------behaviour.method,function
//     console.log("marks =", this.marks); //--------------------------------- "this" means in student object  means in whichever object you could
//   },
// };

//----------------------------------------------------------------------------------------------------
//prototypes explain with array example
// let arr = ["apple", "bannana", "mango"];
//array is object in js
//in js whenever an object create that automatically creates properties which is by default and thats called prototype object
//same array type of date create bydefault array prottype .......eventually they all are object
//array's bydefault methods push,pop,foreach all in this objects

//------------------------------------------------------------------------------------------------------
//we can make our own prototype in js
// we made iur own prototype with  _ _proto_ _
// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };
// const kunal = {
//   salary: 50000,
// };
// kunal.__proto__ = employee;

//-------------------------------------------------------------------------------------------------
// if object and prototype have same method,object's method will be used
const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};
const kunal = {
  salary: 50000,
  calcTax() {
    console.log("tax rate is 20%"); //this will be use
  },
};
kunal.__proto__ = employee;

//-------------------------------------------------------------------------------------------------
//classes in javascript
//- give template of making object
//class is a program-code template for creating objects
//those objects will have some state(varibles/properties) & some behaviour (functions) inside it

//whenver we nee same kind of objects we can use of classes and its gives us a template of code

//SYNTAX
// class MyClass {
//   properties()
//   methods()
// }

//EXAMPLE

// class ToyotaCar {
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }

//   setbrand(brand) {
//     this.brandName = brand; //----------with this keyword whatever varible is object property  |||| but the other brand is argument of indvidual class function
//   }
// }

// you dont have to commit "," here to mention theree is different function in class they will know both are diff function
//class and object have difference that class is single template in basis of that we can create many objects

//from class to create an object
//syntax
// let myObj = new MyClass(),

// let fortuner = new ToyotaCar();
// fortuner.setbrand("fortuner");

// let lambo = new ToyotaCar();
// lambo.setbrand("lambergini");

//--------------------------------------------------------------
//CONSTRUCTOR() METHOD IS :

//its a special method and its reserved keyword
//if its not created in  then automatically invoked by new keyword
//whenevr we define our object to new class --> its invoked by new keyword
// intializes object
//consturctor have some special pre-defind or customization function to help with the different varients

//SYNTAX
// class myClass{
//   constructor() {}
//   myMethod() {}
// }

//--------------------------------------
// we can create custome constructor too

// class ToyotaCar {
//   constructor() {
//     console.log("print constructor function");
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   setbrand(brand) {
//     this.brandName = brand;
//   }
// }
// let fortuner = new ToyotaCar();
// let lambo = new ToyotaCar();

//--------------------------------------------------
// we can write like this too while create custome constructor too

// class ToyotaCar {
//   constructor(brandName, milage) {
//     this.brandName = brandName;
//     this.milage = milage;
//     console.log("print construction");
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar("fortuner", 12);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 20); //if we not define argument then undefined
// console.log(lexus);

//--------------------------------------------------------------
//Inheritance in js

//=> inheritance is passing down properties & methods from parent class to child class

//class1 => property1,property2,method1(),method2()
//class2 => class2 extends Parent {  property1,property2,method1(),method2() }

// SYNTAX
// class parent {}
// class child extends parent {}

//=> if child & parent have same method,child's method will be used. [Method Overriding]

//EXAMPLE-1
// class parent {
//   hello() {
//     console.log("hi hello");
//   }
// }
// class child extends parent {}
// let myObj = new child();

//EXAMPLE-2
// class Person {

//   constructor() {
//     this.species = "homo";
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   work() {
//     console.log("do nothing");
//   }
// }

// class engineer extends Person {
//   work() {
//     console.log("work and build something");
//   }
// }

// let dipeshObj = new engineer();

//---------------------------------------------------------------------------------------
//super Keyword
// the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

//EXAMPLE-1

// class Person {
//   constructor() {
//     console.log("enter parent");
//     this.species = "homo";
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class engineer extends Person {
//   constructor(branch) {
//     console.log("enter child");
//     super(); //invoked the parent class consturctor or u can say super constructor with super()
//     this.branch = branch;
//     console.log("exit child");
//   }
//   work() {
//     console.log("work and build something");
//   }
// }

// let engobj = new engineer("chemical");

//NOTES =>
// parent class ---> child class(derived or inherit property) .
// so before use of "this" or derived consturctor we have to used or invoked super constructore means basically invoked the parent constructor

// to knowing sequences we used to write child / parent

//---------------------------------------------------------------------------------------
//interview question
//method overriding
//super keyword kaise kaam
// inheritance kaise kaam
//extend keyword why use

//---------------------------------------------------------------------------------------
//super keyword use

//1
//to pass the name from the child constructor to parent constructor we use super constructor varible
//super() keyword is very usefull while giving some imp msg from child class to parent class while in heritance super keyword is very usefull
// class Person {
//   constructor(name) {
//     this.species = "homo";
//     this.name = name;
//   }
//   eat() {
//     console.log("eat");
//   }
// }
// class engineer extends Person {
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     console.log("work and build something");
//   }
// }
// let engobj = new engineer("dipesh");

//2
//parents class property and method accesing super keyword is use
//super keyword is used to invoked some method from parent in child
class Person {
  constructor(name) {
    this.species = "homo";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
}
class engineer extends Person {
  constructor(name) {
    super(name);
  }
  work() {
    super.eat();
    console.log("work and build something");
  }
}
let engobj = new engineer("dipesh");
