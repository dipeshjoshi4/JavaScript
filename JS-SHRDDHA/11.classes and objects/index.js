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
// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };
// const kunal = {
//   salary: 50000,
//   calcTax() {
//     console.log("tax rate is 20%"); //this will be use
//   },
// };
// kunal.__proto__ = employee;
// console.log(kunal.calcTax()); //tax rate is 20%

//------------------------------------------------------------------------------------------------------------------------
// 16:40

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//classes in javascript

//give template of making object
//class is a program-code template for creating objects
//those objects will have some state(varibles/properties) & some behaviour (functions/Methods) inside it
//whenver we need same kind of multiple objects we can use of classes and its gives us a template of code

//SYNTAX
// class MyClass {
//   properties()   //constructor()
//   methods()
// }

//let myObj = new myClass();

//EXAMPLE

// class ToyotaCar {

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }

//   setBrand(brand) {
//      this.brandName = brand;
//    }
//  }

// with this keyword brandname is  class object property
// but the other brand is argument of indvidual class function

// you dont have to write "," .because both function is different in class
//class and object have difference that class is single template in basis of that we can create many objects

//from class to create an object

//syntax
// let myObj = new MyClass(),

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");

// let lambo = new ToyotaCar();
// lambo.setbrand("lambergini");


//benifits of using class templete for creating object
//we can do multiple same type object /different type object  without defining same function and property

//class is generally we use when in same temple we use multiple projects //EX-BANK SOFTWARE


//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//CONSTRUCTOR() METHOD IS :

//its a special method in class and its reserved keyword
//if its not created in  then automatically invoked by new
//whenevr we define our object to new class --> its invoked by new keyword
//ex->let obj = new className() => if there is no constructor js made it
//main work of construction function is intializes object
//consturctor have some special pre-defind or customization function to help with the different varients

//SYNTAX
// class myClass{
//   constructor() {}
//   myMethod() {}
// }

//bydefault u print ur object constructor was there
// but we can create our own custome constructor too

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

//we can give argument too in constructor function just like normal function

// class ToyotaCar {
//   constructor(brandName, milage) {
//     this.brandName = brandName;
//     this.milage = milage;
//     console.log("constructor calling ");
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

//if u notice whenevr we call object its heading as toyota car because its made from class

// let lexus = new ToyotaCar("lexus", 20); //if we not define argument then undefined
// console.log(lexus);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//Inheritance in js

//inheritance is passing down properties & methods from parent class to child class

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

// let myobj = new child();


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

 //for the constructor objects

// let p1 = new Person();
// console.log(p1); //Person {species: 'homo'}
// let e1 = new engineer();
// console.log(e1);  //engineer {species: 'homo'}

//-------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

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
//     super();                               //invoked the parent class consturctor or u can say super constructor with super()
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
// so before use of "this" or derived consturctor we have to used or invoked super constructore means basically invoked
// the parent constructor
// suggestions -> to knowing sequences we used to write child / parent

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
//     super.eat();
//     console.log("work and build something");
//   }
// }
// let engobj = new engineer("dipesh");


//Error Hnadling

//try-catch

// try {
//     ... normal mode
// } catch(err) {   //err is error object
//     ...handling eror
// }

//problem statement
// let a = 5;
// let b = 10;
// console.log(a)
// console.log(b)
// console.log(a+b)
// console.log(a + c)  //eror -

//if this error happend then after that error everycode will be not run.all though the other code part is correct then because of one
//error code will not run
//for that we use try and catch block to handle error.which can find error and try to handle the error

// console.log(a+b)
// console.log(a+b)
// console.log(a + b)


//ANSWER

// let a = 5;
// let b = 10;
// console.log(a);
// console.log(b);
// console.log(a + b);

// try {
//     console.log(a+c)
// } catch (err) {
//     console.log(err)
// }

// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);