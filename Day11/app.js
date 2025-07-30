/* Understandig how does the api request was sent before Ajax and then
    how AJAX come to play and then what is XMLHttpRequest and then fetch and
    Understandig callbackhell, PromiseChaining and async/await and fetch get
    in details with headers,method,query params, signal,mode,accept in
    headers-> and backend for this fetch as well,
    fetch get with headers and others options
    fetch post with all type of data like formdata,urlencoded data and json data */
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

// ************************************ what is AJAX

// Then AJAX come after the traditional way of sending request :->
// A way to send request to server asynchronusly and without the page reload-> thats why it as called ajax and we now use json as data format but still it is called ajaxx just becasue of the way sedning request
// Asynchronus javascript and (XML)-> a form used to seddn structured data-> like html(eXtensible Markup Language)
{
  /* <user>
  <name>Ali</name>
  <email>ali@example.com</email>
</user>  */
}
// this is how it looks like

// in ajax first we were using XMLHttpRequest -> WEB API
// use xml as data format, http to send request over the internet
//  use callback and events-> onload, onerror etc so its was an event driven.
// here the callback hell arsie

// example

let xhr = new XMLHttpRequest(); // we make a new object that will be use to send request state 0
// This object lets the browser send HTTP requests asynchronously (without reloading the page).

let username="mali14655"
xhr.open("GET", `https://api.github.com/users/${username}`); // opened  state 1
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
    console.log("Success:", xhr.responseText);
  } else {
    console.log("Request completed but failed with status:", xhr.status); // to see errors like 404 or 500
  }
};
// This is triggered when the request completes successfully, regardless of the HTTP status code.
// You should still check xhr.status to confirm the response was successful.
xhr.onerror = function () {
  console.log("Network Error");
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
function fetchData(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("Get", `https://api.github.com/users/${username}`, false); // synchronus
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      callback();
    }
  };

  // xhr.send()
}

function fetchData2() {
  console.log("xyz");
}

fetchData(() => {
  fetchData2(); // if it too get callback and so on...
});

// console.log("hi") // for checking the synchronus execution  as i have used fasle in xhr.open();

//********************************************this problem was solved by promises

function Data1(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${id} data fetched`);
    }, 2000);
  });
}
function Data2(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${id} data fetched`);
    }, 2000);
  });
}
function Data3(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${id} data fetched`);
    }, 2000);
  });
}
function Data4(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${id} data fetched`);
    }, 2000);
  });
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

// ****************************************using fetch in async/await ad promise chaining***************

// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Finally promise is resolved/rejectd")
// })

//******************* */ inside a fucntion
// function fetchUser(){

//     fetch("https://api.github.com/users")
//     .then((response)=>{
//         return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Finally promise is resolved/rejectd")
// })
// }
// fetchUser()

// OR

// async function fetchUserData() {
//     try {
//         let response= await fetch("https://api.github.com/users")
//         let data= await response.json();
//         console.log(data)
//         // finally block things can be written here
//     } catch (error) {
//         console.log(error)
//     }

// }

// fetchUserData()

//  here i am trying to accept strings / json

// fetch("https://api.github.com/users/mali14655")
// fetch("http://localhost:3000/api/get", {
//   headers: {
//     // Accept: "application/json", // Request JSON response
//     Accept: "text/plain", // accept text
//   },
// })
//   .then((res) => {
//     if (!res.ok) throw new Error("Something went wrong" + res.status);
//     console.log(res.headers.get("content-type"));
//     if (res.headers.get("content-type") == "application/json; charset=utf-8") {
//       return res.json();
//     } else if (res.headers.get("content-type") == "text/plain; charset=utf-8") {
//       // throw new Error("This is not valid response data type")
//       // or
//       return res.text(); // willl wroks -> accepting multiple type data on frontend
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     if (err.name == "TypeError") {
//       console.log("Netwrok Error", err);
//     } else {
//       console.log(err);
//     }
//   });

// let UserForm=document.querySelector("#fetchForm");
// UserForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     sendData();
// });
// function sendData(){

//     let formobject=new FormData(UserForm);
//     let username=formobject.get("username");
//     let number=formobject.get("number");
//     let data={username,number};

//     fetch("http://localhost:3000/api/send",{
//         method:"POST",
//         // headers: { 'Content-Type': 'application/json' }, // while sending json string
//         // body:JSON.stringify(data)
//         // headers: { 'Content-Type': 'multipart/form-data' }, // while sending form data, it is also set automatically while sedning form data
//         body:formobject
//     }
// )
// .then((res)=>{
//     // if(!res.ok){
//     //     throw new Error("Some thing went Wrong")
//     // }
//     // else{
//         return res.json()
//     // }

// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     if(err.name==="TypeError"){
//         console.log("network err",err)
//     }
//     else{
//         console.log(err)
//     }
// })
// }



 // Properly using fetch 
 // **********************************Get************
// 1
//  fetch("http://localhost:3000/api/get/users?name=ali",{
//      headers:{
//         Accept:"application/json", // i am expecting this from backend
//     },
//     // mode:"same-origin", // tell the broswer to only send request to same origin
//     mode:"cors", // to allow send request to cross origin
//     // signal:conroller.signal , // to cancel request,trying in next example
//  })
//  .then((res)=>{
//     if(!res.ok){
//         throw new Error("Something went wrong "+ res.status);
//     }
//     else{
//         return res.json()
//     }
//  })
//  .then((data)=>{
//     console.log(data)
//  })
//  .catch((err)=>{
//     if(err instanceof TypeError){
//         console.log("Network Error", err.message)
//     }
//     else{
//         console.log(err)
//     }
//  })



// 2

// let controller=new AbortController(); // to cancel asynchronus operations
// console.log(controller.signal)
// setTimeout(() => {
//     controller.abort("As it is taking too much time") // with custom message
// }, 3000);

// setTimeout(()=>{
//  fetch("http://localhost:3000/api/get/users?name=ali",{
//      headers:{
//         Accept:"application/json", // i am expecting this from backend
//     },
//     // mode:"same-origin", // tell the broswer to only send request to same origin
//     mode:"cors", // to allow send request to cross origin
//     signal:controller.signal , // to cancel request
//  })
//  .then((res)=>{
//     if(!res.ok){
//         throw new Error("Something went wrong "+ res.status);
//     }
//     else{
//         return res.json()
//     }
//  })
//  .then((data)=>{
//     console.log(data)
//  })
//  .catch((err)=>{
//     if(err instanceof TypeError){
//         console.log("Network Error", err.message)
//     }
//     else{
//         console.log(err)
//     }
//  })
// },5000)


// If you only want to edit the commit message:
// git commit --amend
// VIM
// Vim (short for Vi IMproved) is a powerful, keyboard-driven text editor that's built into almost every Unix/Linux system (and even Git on Windows).
// :wq write and quite -> mean save
// :q! quit without saving

// to change default editor to vs code
// git config --global core.editor "code --wait"


// If you want to undo the commit entirely (keep the changes staged):
// git reset --soft HEAD~1

// If you want to undo the commit and unstage the changes (but keep code):
// git reset --mixed HEAD~1

// If you want to undo the commit and remove all changes (be careful):
// git reset --hard HEAD~1


// POST request 

// function PostData(){
//   fetch("http://localhost:3000/api/post/user",{
//     method:"POST",
//     headers:{
//      'Content-type':"application/json" 
//     },
//     body:JSON.stringify({
//       username:"Ali123",
//       email:"ali@gmail.com"
//     }),
//     // mode:"same-origin", // testing
//     redirect:"error",   // testing
//   })
//   .then((res)=>{
//     console.log(res)
//     if(!res.ok){
//       throw new Error("Something went wrong "+res.status);
//     }
//     return res.json()
//   })
//   .then((data)=>{
//     console.log(data.message)
//   })
//   .catch((error)=>{
//     if(error instanceof TypeError){
//       console.log("Network error",error)

//     }
//     else{
//       console.log(error)
//     }
//   })
// }

// PostData()


// Url encoded data

// const data = new URLSearchParams();
// data.append("name", "Ali");
// data.append("age", "25");
// // console.log(data.get("name"));
// // console.log(data.toString())// urlencoded
// function PostUrlData(){
//   fetch("http://localhost:3000/api/post/urlencoded",{
//     method:"POST",
//     headers:{
//           "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body:data.toString()
//   })
//   .then((res)=>{
//     if(!res.ok){
//       throw new Error("Reqesut reacehd the server but something went wrong "+res.status);
//     }
//     else{
//       return res.json()
//     }
//   })
//   .then((data)=>{
//     console.log(data.message)
//   })
//   .catch((err)=>{
//     if(err instanceof TypeError){
//       console.log("Network issue ", err)
//     }
//     else{
//       console.log(err)
//     }
//   })
// }
// PostUrlData();


// posting FormData

// let form=document.querySelector("#form")
// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   let data=new FormData(e.target);
//   fetch("http://localhost:3000/api/post/simple-formdata",{
//     method:"POST",
//     headers:{
//       // "content-type":"multipart/form-data" // should not be set manually, browser sets it itself
//     },
//     body:data
//   })
//   .then((res)=>{
//     if(!res.ok){
//       throw new  Error("Request reacjed the server but something went wrong "+res.status);
//     }
//     else{
//       return res.json()
//     }
//   })
//   .then((data)=>{
//     console.log(data.message)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// })

// 
let form2=document.querySelector("#form2")
form2.addEventListener("submit",(e)=>{
  e.preventDefault();
  let data=new FormData(e.target);
  fetch("http://localhost:3000/api/post/singleFile-formdata",{
    method:"POST",
    body:data
  })
  .then((res)=>{
    if(!res.ok){
      throw new  Error("Request reacjed the server but something went wrong "+res.status);
    }
    else{
      return res.json()
    }
  })
  .then((data)=>{
    console.log(data.message)
  })
  .catch((err)=>{
    console.log(err)
  })
})

// xyz