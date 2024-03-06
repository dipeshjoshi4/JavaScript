console.log("Fetch API");

//Fetch API
//the fetch api provides an interface for fetching(sending/receiving) resources
//it uses Request and Response objects
//the fetch() method is used to watch a resource(data)

//my words
//api are basically based on request and response cycle. let suppose we wanr pizza recipe then they gave some data in a response

// let promise = fetch(url, [options]);

//most of time when we fecth api used we used get request which work as take data from server give to us...when we dont use option means bydefault its always a get reuest work for us
//but we coudnt get response as we need => inshort in different format data we get for understanding that we have to understand some terms

//

//AJAX => is Asynchronous JS & XML
//-> first network request means api reuqest comes in  xml data format but now days xml less or json more driven dataformat resposne comes
//-> here data format means if u give money to ur friend -> UPI | CASH | NETBANKING => give money(data) but in other format
//-> so as per dataformat for use we can deal it other way
//INSHORT => DATA FORMAT CHANGE NOT DATA SO DEAL WITH DATA METHODS ARE DIFFERENT

//JSON => is Javascript object notation || AJAJ => ASYNCRONOUS JS AND JSON || AJAX

// so when api request send response comes in (json) format and we have to convert into js object
// JSON ====> JS Object
//json() method
//=>async method
//=> returns a second promise that resolves with the result of parising THE response body text as JSON.
//=>(Input is JSON, Output is JS object)

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");



//with async await

// const getFacts = async () => {
//   console.log("getting data...."); //------------for the proof
//   let response = await fetch(URL); //------------get promise => got response in json
//   console.log(response);
//   let data = await response.json(); //-----------json => js object
//   factPara.innerText = data[1].text; //----------manipulate and print
// };


//With Promise chaining
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[0].text
//     })
// }


btn.addEventListener("click", getFacts);

//SOME IMP TOPICS IN API CALLS

//Request and Response

//HTTP Verbs
//=> some rule of internet || some methods of HTTP => get request, post request, delete request, patch request(chnage in data)

//Response status code
//-> successfull request = 200
//-> bad adress => 400
//-> cleint error => 400-499
//-> server error => 500-599

//HTTP response headers also contain details about the reponses,such as content type,HTTP status code ETC.

//Question => sending POST request