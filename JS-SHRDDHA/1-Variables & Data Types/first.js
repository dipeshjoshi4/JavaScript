// console.log("hello");

// fullName = "dipesh joshi";
// price = 20.22;
// age = 24;
// x = null;
// y = undefined;
// isFollow = true;

// console.log(fullName);
// console.log(price);
// console.log(age);
// console.log(x);
// console.log(y);
// console.log(isFollow);

//dynamicalTyped => i can store any value in any varible i dont have to defined the value type(datatype) . we can change value.datatypes depends on value

//a=b => b value assign in a

//variable convention rules

//1.case sensitive-> "a" & "A"
//2.reserved words
//3.$,_

// var -> global scope updated and redefin too

//let -> block scope updated but dont redefine

//const -> block scope cant be value change

// const product = {
//   fname: "ballpen",
//   rating: 4,
//   offer: 5,
//   price: 270,
// };

// product.fname = "pencil";          || you can change like this

// product["fname"] = "pencil black"; || you can change like this

// console.log(product);

// let p = "23";
// let b = 5;
// let answer = p + b;
// console.log(answer); //235
// console.log(typeof answer); //string

const profile = {
  userName: "@shrddha",
  isFollow: false,
  post: 195,
  followers: 569,
  following: 4,
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.userName);
console.log(typeof profile["isFollow"]);
