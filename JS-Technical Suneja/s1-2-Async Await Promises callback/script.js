console.log("s1-2-Async Await Promises callback");
/*
const datas = [
  { name: "Ajay", profession: "Software Developer" },
  { name: "Anuj", profession: "Software Developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
      //   output += `<li>${data.index}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  setTimeout(() => {
    datas.push(newData);
  }, 2000);
}

createData({ name: "Vivek", profession: "Software Engineer" });
getDatas();


*/

//NOTES :ABOVE TIMING FUNCTION WILL BE 1 S THATS WHAY OUR NEW OBJECT DATA NOT BE SEEN IN OUTPUT THATS TIME DEPENDENCY OF OTHER FUNCTION TO SOLVE THAT's why WE HAVE ASYNC...AWAIT,CALLBACKS,PROMISES

///-----------------------------------------------------callbacks function------------------------------------------

//its solved very easy .so it first creat data function value push into datas and that runs getdata function

const datas = [
  { name: "Ajay", profession: "Software Developer" },
  { name: "Anuj", profession: "Software Developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
      //   output += `<li>${data.index}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData, callback) {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}

createData({ name: "Vivek", profession: "Software Engineer", getDatas });
