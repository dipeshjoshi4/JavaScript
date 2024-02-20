//1
//you creating a website for ur clg.create a class user with 2 properties,name & email.its also has method called viewData() that allows user
//to view website data.

let DATA = "SECRET INFO";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", DATA);
  }
}

let student1 = new User("dipesh", "dip@gmail.com");
let student2 = new User("aman", "aman@gmail.com");
let teacher1 = new User("xyz", "xyz@gmail.com");

//1
//create a new class calls admin which inherit from the User add a new method called edit data to admin that allows it to edit website data
