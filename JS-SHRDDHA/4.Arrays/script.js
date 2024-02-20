console.log("welcome to array lecture-4");

//-----------------------
//Array in js : collections of items
//linear way to store data
//linear means index matters
//typeof array is object
//kind of object which key role replace by index

// let info = ["dipesh", 22, "delhi", "engineer"];
// console.log(info);
// console.log(info.length);

//u can chgange array by simply this
// info[0] = "hardik";
// info[1] = 23;
// console.log(info); //(4) ['hardik', 23, 'delhi', 'engineer']

//string is immutable
//array is not immutable .it can modify

//looping over an array

//loops means iterable (i) iterate in every value (string,object,array)

//for
// let heros = ["ironmen", "captain", "spidermen", "thor", "antman", "black-wdow"];
// for (let i = 0; i < heros.length; i++) {
//   console.log(heros[i]);
// }

//for..of

// let heros = ["ironmen", "captain", "spidermen", "thor", "antman", "black-wdow"];
// for (let hero of heros) {
//   console.log(hero);
// }

// let city = ["delhi", "hyd", "mumbai", "pune", "gurgaon"];
// for (let item of city) {
//   console.log(item.toUpperCase());
// }

//1. practise question
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let value of marks) {
//   sum = sum + value; //sum += value;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of class is : ${avg}`);

//2. practise question

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer; //items[i] -= offer;
// }
// console.log(items);

///------------------------
//Array Methods
//-------------------------

//1
///push -> in the end add something || in original array

// let foodItem = ["dipesh", "saman", "lichi", "tomotao"];
// console.log(foodItem);
// foodItem.push("chips", "mango", "paneer");
// console.log(foodItem);

//2
//pop -> from end delete & return || in original array

// let fruits = ["cherry", "mango", "lichi", "tomotao", "pinkmango"];
// console.log(fruits); //(5) ['cherry', 'mango', 'lichi', 'tomotao', 'pinkmango']
// let deletedItem = fruits.pop();
// console.log(fruits); //(4) ['cherry', 'mango', 'lichi', 'tomotao']
// console.log(deletedItem); //pinkmango

//3
///tooString() => convert array from into string || output in new array

// let fruitsSeason = ["cherry", "mango", "lichi", "tomotao", "pinkmango"];
// console.log(fruitsSeason); //(5) ['cherry', 'mango', 'lichi', 'tomotao', 'pinkmango']
// console.log(fruitsSeason.toString()); //cherry,mango,lichi,tomotao,pinkmango
// console.log(fruitsSeason); //back to original array

//4
//concat() : joins multiple arrays & return result || output in new array

// let studentName = ["dipesh", "jayesh", "mahesh", "suresh", "rakesh"];
// let girlsName = ["richa", "rinky", "vani", "sunita", "megh"];
// studentName.concat(girlsName);
// console.log(studentName.concat(girlsName));

//5
//unshift() :add to start || in that original array array

// let girlsName = ["richa", "rinky", "vani", "sunita", "megh"];
// let dip = girlsName.unshift("nidhi");
// console.log(girlsName);

//6
//shift() :delete from start & return

// let girlsName = ["richa", "rinky", "vani", "sunita", "megh"];
// let deletedName = girlsName.shift();
// console.log(girlsName);
// console.log(deletedName);

//7
//slice():returns a piece of the day || Slice(startindex, endindex) || not in original array gives new array

// let fname = ["dipesh", "rom", "ronak", "assam"];
// let newfname = fname.slice(0, 2); //last index not included(exculded)
// console.log(newfname); //dipesh,rom
// console.log(fname);

//8
//splice():chnage an original array(start-index,remove value count,replace item ) ||splice(startindex,delcount,newElement) || output in the original array

// let country = ["india", "rom", "newland", "ausss"];
// country.splice(1, 2, "america", "west");
// console.log(country); // ['india', 'america', 'west', 'ausss']

// let number = [0, 1, 2, 3, 4, 5, 6, 7];
// number.splice(2, 2, 101, 102);
// console.log(number); //0,1,101,102,4,5,6,7

//only add with splice
// let mineNumber = [0, 1, 2, 3, 4, 5, 6, 7];
// mineNumber.splice(2, 0, 101);
// console.log(mineNumber); //0,1,101,2,3,4,5,6,7

//practise question

// let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//remove first company
// company.shift(0, 1);
// console.log(company);

//remove uber and add OLA
// company.splice(2, 1, "OLA");
// console.log(company);

//add AMAZON at the end
// company.splice(6, 0, "AMAZON");
// console.log(company);
