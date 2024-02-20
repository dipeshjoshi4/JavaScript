console.log("Array");

//array are varibles which can hold more then on value

// const fruits = ["banana", "apples", "grapes"];
// console.log(fruits);
// console.log(fruits.length);

//you can store different types of data too

// const a = ["harry", 7, true, NaN];
// console.log(a);
// console.log(a.length);

//strings are immutable(can't be change in original)  but arrays are mutable(can be change in original)

//array can be find the indvidual charcter from the index
// let array = [1, 2, 3, 4, 5]; //array
//        index 0, 1, 2, 3, 4; //index

//indvidual value
// console.log(array[0]); //1
// console.log(array[4]); //5

//length of array
// console.log(array.length) //5

//if we do like this then array is mutable
// console.log(array);
// array[0] = 566;
// console.log(array);

//js object arr the object

// let arr = [1, 2, 3, 45, 6];
// console.log(typeof arr);

//Mthods------------------------------------------------------------------------------
//Array Methods
//- there are some important array methods in js some of them are as follows

//1.to string() ->converts an array to a string of common seprated values

// let n = [1, 7, 9];
// console.log(n.toString());

//2.join -> joins all the elements using a sperator

// let x = [1, 7, 3];
// console.log(x.join(" and "));

//3.pop() -> removes the last element from the array

// let y = [1, 2, 3, 4, 5, 6];
// console.log(y.pop());
// console.log(y);

//4.push() =>adds a new elemennt at the end of the array

// let z = [1, 2, 45, 6, 58, 44];
// z.push("harry");
// console.log(z);

//5.shift() => remove the first element and RETURNS THE REMOVED FIRST ELEMENT
// console.log(z.shift());
// console.log(z);

//6.unshift() => adds anew element in the start of the array and RETURNS A NEW ARRAY LENGTH
// console.log(z.unshift(1000));
// console.log(z);

//7.delete => array element can deleted the using the delet Operator

// let d = [7, 8, 9, 10];
// delete d[3]; //delete is an operator

// console.log(d);
// console.log(d.length);
// console.log(d[4]);

//=> so here D.LENGTH WILL be still 4 but a value is undefined and its write in array in replace of deleted value

//8.concat => used to join arrays to be given array

// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let a3 = [9, 8, 7];

// let a = a1.concat(a2, a3);
// console.log(a);

// console.log(a1.concat(a2, a3));
// console.log(a1);

//CATCH => HERE IT NOT CHANGE THE EXISITING ARRAY ITSELF.so a1,a2 and a3 will be same array

//9 sort() => sort method is used to sort an array alphabetically

// let z3 = [9, 8, 7,15,20,45,111111.,8888,0456];
// z3.sort();
// console.log(z3); //7,8,9

// let z1 = ["zain", "ZAIN anwar", "dipesh", "Dipesh", "harry"];
// console.log(z1.sort()); //[ 'Dipesh', 'ZAIN anwar', 'dipesh', 'harry', 'zain' ]

//IT WILL MODIFY THE ORIGINAL ARRAY => //it will alphabaticallt store always remember

// sort() takes an optional comback function.
// if this function is provided as first argument the sort() function will consider these values(the value returned from the compare function) as the basis of sorting

///now u have to do sorting in ascending order

//normal sort
// let z3 = [9, 8, 7, 15, 20, 45, 111111, 8888, 456];
// z3.sort();
// console.log(z3); // 111111,15,20,45,456,7,8,8888,9];

//asseconding order sort
// let compare = (a, b) => {
//   return a - b;
// };

// z3.sort(compare);
// console.log(z3); // [7,8,9,15,20,45,456,8888,1111111];

//10 splice() => splice can be used to add new items an array ||REMAINING VALUES SHOWS IN AN ARRAY

//syntax
//numbers.splice(num1,num2,num3,num4) => num1 => from which index included || num2=> how many values remove || num 3 & 4 => the value  we add to (optiomnal)

// const numbers = [15, 26, 37, 41, 55];
// numbers.splice(3, 2, 555); //15,26,37,555 //remaining values shown array
// console.log(numbers);

//11. slice() =>  // excluded  VALUES SHOWS IN AN ARRAY
// slice out a piece from an array it creates a new array || slice valued array

//syntax
//numbers.splice(num1,num2) => from start num1 to end num2 (num2 is excluded)  => that values array make

// const num1 = [11, 22, 33, 4444, 55555];
// console.log(num1.slice(2)); //33,4444,55555

// const num2 = [11, 22, 33, 4444, 55555];
// console.log(num2.slice(0, 2)); //11,22

//12reverse() => reverse the array

// let R = [15, 16, 17, 18, 19];
// console.log(R.reverse()); //19,18,17,16,15

//------------------------------------------------------------------------------------------------------
