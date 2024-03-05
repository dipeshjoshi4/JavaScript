console.log("Fetch API");

//Fetch API
//the fetch api provides an interface for fetching(sending/receiving) resources
//it uses Request and Response objects
//the fetch() method is used to watch a resource(data)

//my words
//api are basically based on request and response cycle. let suppose we wanr pizza recipe then they gave some data in a response

// let promise = fetch(url, [options]);

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
  console.log("getting Data....");
  let response = await fetch(URL);
  console.log(response.status);
};

//most of time when we fecth api used we used get request which work as take data from server give to us...when we dont use option means bydefault its always a get reuest work for us
//but we coudnt get response as we need => inshort in different format for understanding that we have to understand some terms

//AJAX => is Asynchronous JS & XML
//JSON => is Javascript object notation
//json() method => returns a second promise that resolves with the result of parising
