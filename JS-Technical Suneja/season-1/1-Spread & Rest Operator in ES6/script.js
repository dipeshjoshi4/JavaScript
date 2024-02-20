console.log("Spread & Rest Operator in ES6");

//-------------------------------------------Spread & Rest Operator in ES6---------------------------------------------------
//1.difference between spread and rest
//2.both use in array and object

//-------------------------------------------Rest Operator in ES6------------------------------------------------------------

function addNumbers(a, b, c, ...other) {
  console.log(other); //------------------------------------------------- this rest operator gives array form of data with other value
  console.log(other[0]); //-------------------------------------------------- we can find the indvidaul number two
  return a + b + c;
}
const res = addNumbers(2, 5, 6, 8, 9);
console.log(res);
