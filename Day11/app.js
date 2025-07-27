// Understandig how does the api request was sent before Ajax and then how AJAX come to pla and thenwhat is XMLHttpRequesta and then fetch and Understandig callbackhell, PromiseChaining and async/await

// step 1 
// this code is for backend to receive tradition request before ajax through form
// form is in indexed.html
{
// <!-- backend for this is here 
//         import express from "express";
//     import dotenv from "dotenv"

//     dotenv.config();
//     let port=process.env.PORT || 5000;
//     let app=express();

//     app.get('/api/github',(req,res)=>{
//         let username=req.query.username;
//         res.send(`
//     <html>
//       <body>
//         <h1>${username}</h1>
//         <a href="/">Back</a>
//       </body>
//     </html>
//   `)
//     })


//     app.listen(port,()=>{
//         console.log(`app listening on port ${port}`)
//     }) -->

}


//************************************/ what is AJAX

// Then AJAX come after the traditional way of sending request :->
// A way to send request to server asynchronusly and without the page reload-> thats why it as called ajax and we now use json as data format but still it is called ajaxx just becasue of the way sedning request
// Asynchronus javascript and (XML)-> a form used to seddn structured data-> like html(eXtensible Markup Language)
{/* <user>
  <name>Ali</name>
  <email>ali@example.com</email>
</user>  */}
// this is how it looks like

// in ajax first we were using XMLHttpRequest -> WEB API
// use xml as data format, http to send request over the internet
//  use callback and events-> onload, onerror etc so its was an event driven.
// here the callback hell arsie

// example

let xhr= new XMLHttpRequest(); // we make a new object that will be use to send request state 0
// This object lets the browser send HTTP requests asynchronously (without reloading the page).


let username="mali14655"
xhr.open("GET",`https://api.github.com/users/${username}`) // opened  state 1
// open(method, url,true/false) prepares the request. false for synchronus request
// Doesn’t send it yet—just sets it up.

// State	         Value	Description
// UNSENT	           0	Request is created, but not opened yet
// OPENED	           1	open() has been called, but send() not yet
// HEADERS_RECEIVED	   2	send() has been called, and headers received
// LOADING	           3	Response body is being received (partially)
// DONE	               4	Request finished (successfully or with error)

xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
          const data = JSON.parse(xhr.responseText); 
          console.log(data); 
        }
      };
// Defines a callback function that will be triggered every time xhr.readyState changes.
// This is how we check the progress and final result of the request.


xhr.onload = function () {
  if (xhr.status === 200) {
    console.log('Success:', xhr.responseText);
  } else {
    console.log('Request completed but failed with status:', xhr.status); // to see errors like 404 or 500
  }
};
// This is triggered when the request completes successfully, regardless of the HTTP status code.
// You should still check xhr.status to confirm the response was successful.


xhr.onerror = function () {
  console.log('Network Error');
};
// This is triggered if there's a network error(Only if the request fails to even reach the server.) (e.g., no internet, DNS failure, server unreachable).
// It won’t be triggered by a normal HTTP error (like 404 or 500). Only if the request fails to even reach the server.
// if any error

// xhr.send(); // sends the request to the server. state 2

// and here the call back hell arises as we have no other way of doings things in order 

// example

// function fetchData(callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://api.example.com/data");
//   xhr.onload = () => {
//     callback(null, xhr.responseText);
//   };
//   xhr.onerror = () => {
//     callback("Error occurred");
//   };
//   xhr.send();
// }

// fetchData((err, result) => {
//     if (err) {
//         console.error(err);
//     } else {
//         // and here we can now  call the funcion we want to exectute after the loading request succes
//         abc(()=>{
//             xyz();
//         });
//     console.log("Data:", result);
//   }
// });

// function abc(callback){
//     // let req=new xmlhttpreq();
//     req.onload=()=>{
//         callback();
//     }
//     // things i want to do after the sucess of the api reqesut
// }
// function xyz(){
//     // things i want to do after the abc
// }

// another example
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     anotherAsyncFunction(function () {
//       anotherOne(function () {
//         // deeply nested
//       });
//     });
//   }
// };





// this problem was solved by promises,fetch and promise chaining in 2015 ES6
// 2009->ES5  
// 2015->ES6  
// 2016-> ES6+(async/await)

// So in 1997, Netscape submitted JavaScript to an international standards organization called:ECMA International
// ECMA = European Computer Manufacturers Association (standardization asssociation)
// ECMAScript are the rules or specification that how javascript should work


// table
// What you return inside .then()	     What .then() passes to the next .then()
// A regular value (e.g. "ali")	        Automatically wrapped in Promise.resolve(value)
// A promise (e.g. response.json())	     Waits for that promise to resolve (promise chaining)



// **********************************************Promises

// new Promise((res,rej)=>{
//     res("xyz")
// })
// .then((value)=>{
//     // return value.json() // used in fetch, which actually returns a promise
// })
// .then((nextValue)=>{
//     console.log(nextValue) // we get the value of the promise in the nextValue param
// })


// new Promise((resolve,reject)=>{
//     resolve({username:"ali"})
// })
// .then((user)=>{
//     return user.username  // returning a regular value so it is wrapped inside a Promise.resolve("ali")
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((Err)=>{
//     console.log(Err)
// })
// .finally(()=>{
//     console.log("Promise is either resolved or rejecte!")
// })

// also we can use promises with async await

// let promise=new Promise((resolved,rejected)=>{
//     setTimeout(() => {
//         // resolved("Ali")
//         rejected("Error")
//     }, 3000);
// })


// async function consumePromise(){
//     try{
//     let value=await promise
//     console.log("done")
//     console.log(value)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// consumePromise()




// ************************************************* CallbackHell problem

// function Data1(id,callback){
//     setTimeout(() => {
//         console.log(`${id} data fetched`)
//         callback()
//     }, 2000);
// }

// function Data2(id,callback){
//     setTimeout(() => {
//         console.log(`${id} data fetched`)
//         callback()
//     }, 2000);
// }
// function Data3(id,callback){
//     setTimeout(() => {
//         console.log(`${id} data fetched`)
//         callback()
//     }, 2000);
// }
// function Data4(id,){
//     setTimeout(() => {
//         console.log(`${id} data fetched`)
//     }, 2000);
// }

// call backhell
// Data1(1,()=>{
//     Data2(2,()=>{
//         Data3(3,()=>{
//             Data4(4)
//         })
//     })
// })

//******************************************* */ XMLHttpRequest is based on callbacks
function fetchData(callback){
let xhr=new XMLHttpRequest();
xhr.open("Get",`https://api.github.com/users/${username}`,false)  // synchronus
xhr.onload=()=>{
    if(xhr.readyState==4 && xhr.status==200){
        console.log(xhr.responseText)
    callback()
}
}

// xhr.send()
}

function fetchData2(){
    console.log("xyz")
}

fetchData(()=>{
    fetchData2() // if it too get callback and so on...
})

// console.log("hi") // for checking the synchronus execution  as i have used fasle in xhr.open();



//********************************************this problem was solved by promises

function Data1(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${id} data fetched`)
        }, 2000);
    })
}
function Data2(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${id} data fetched`)
        }, 2000);
    })
}
function Data3(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${id} data fetched`)
        }, 2000);
    })
}
function Data4(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${id} data fetched`)
        }, 2000);
    })
}


// Data1(1)
// .then((value)=>{
//     console.log(value)
//     return Data2(2)
// })
// .then((value)=>{
//     console.log(value)
//     return Data3(3)
// })
// .then((value)=>{
//     console.log(value)
//     return  Data4(4)
// })
// .then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Either promise has been resolved or rejected")
// })


// *****************************then there was a syntactic sugar added over promises which was async/await

// await pause the execution of the function untill promises is resolved or rejected
// await can only be used inside async functions
// await can only be used infront of Promise

// async function fetchDataS(){
//     try {
//         let value1=await Data1(1);
//         console.log(value1)
//         let value2=await Data2(2)
//         console.log(value2)
//         let value3=await Data3(3)
//         console.log(value3)
//         let value4=await Data4(4)
//         console.log(value4)
//     } catch (error) {
//      console.log(error)   
//     }
// }

// fetchDataS();