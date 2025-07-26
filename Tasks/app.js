// // Create a function that logs "Hello after 3 seconds" using setTimeout.
// // Start a timeout that logs "You won't see this" after 5 seconds, but cancel it after 2 seconds using clearTimeout.
// // Write a countdown from 5 to 0 using setInterval. After it reaches 0, stop the interval using clearInterval.
// // // ************
// // Create a button in HTML: Start Timer
// // When clicked, start a timer that logs every second.
// // Add another button: Stop Timer
// // When clicked, clear the interval.
// // 1
// function sayHello(){
//     console.log("Hello")
// }

// setTimeout(sayHello,2000)

// // 2
// function hiddentext(){
//     console.log("You won't see this!")
// }

// let timeout=setTimeout(hiddentext,5000); // stroing reference so that i can clear it later.
// setTimeout(()=>{
//     clearTimeout(timeout)
//     console.log("cleared")
// },2000)

// // 3
// let count=5;
// let interval=setInterval(()=>{
//     if(count>=0){
//         console.log(count)
//         count--;
//     }
//     else{
//         clearInterval(interval)
//     }
// },1000)

// // 4
// let time=0;
// let timer;
// let start=document.querySelector(".start");
// let stop=document.querySelector(".stop");

// start.addEventListener("click",()=>{
//     timer=setInterval(()=>{
//         console.log(time++);
//     },1000)
// })

// stop.addEventListener("click",()=>{
//     clearInterval(timer)
// })

// 5
// Simulate an online exam process:
// After 1s → "Login Started"
// After 2s → "Fetching Questions"
// After 2s → "Displaying Questions"
// After 2s → "Exam Started"
// Use nested callbacks with setTimeout to simulate this.

// function Login(user,callback){
//     setTimeout(()=>{
//         console.log("Logged In")
//         console.log("Fetching Question...")
//         callback()
//     },2000)
// }

// function FetchingQuestions(callback){
// setTimeout(() => {
//     console.log("Question Fetched")
//     console.log("Displaying Questions...")
//     callback()
// },2000);
// }

// function DisplayingQuestions(){
//     setTimeout(() => {
//         console.log("Questions Displayed")
//     }, 2000);
// }

// Login("ali",()=>{
//     FetchingQuestions(()=>{
//         DisplayingQuestions();
//     })
// })

// 6
// Create a function delay(ms) that returns a promise which resolves after ms milliseconds.

// function delay(ms){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(`delayed ${ms} ms`)
//         }, ms);
//     })
// }

// delay(3000)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
// console.log(err)
// })

// 7
// perfoming that callback hell funcion with promise chaining

function Login(user, callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Logged In");
    }, 2000);
  });
}

function FetchingQuestions(callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Question Fetched");
    }, 2000);
  });
}

function DisplayingQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Questions Displayed");
    }, 2000);
  });
}


// Login("Ali")
// .then((res)=>{
//     // throw new Error("Something went wrong while Logging in") // error that go to catch block
//     console.log(res)
//     console.log("Fetching Question...");
//     return FetchingQuestions()
// })
// .then((res)=>{
//     console.log(res)
//     console.log("Displaying Questions...");
//     return DisplayingQuestions()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })


// 8
// Take the above chained example and rewrite it using async/await.


// async function  start() {
//     try {
//         let login=await Login("Ali");
//         console.log(login);
//         let Questions=await FetchingQuestions();
//         console.log(Questions);
//         let Displayed=await DisplayingQuestions()
//         console.log(Displayed)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

// 9
// Create an async function that sometimes throws an error. Use try/catch to handle it and display a message like:

// async function  start() {
//     try {
//         let login=await Login("Ali");
//         console.log(login);
//         // if(condtion){
//             throw new Error ("Fetching Failed")
//         // }
//         let Questions=await FetchingQuestions();
//         console.log(Questions);
//         let Displayed=await DisplayingQuestions()
//         console.log(Displayed)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

// // 10
// Use document.addEventListener("keydown", ...) to log every key the user presses.
// Use window.addEventListener("resize", ...) to show how often the window is resized.
// // 11
// Add a horizontal progress bar at the top of the page.
// On window.scroll, update its width to show how much of the page is scrolled.
// // 12
// Add a button that listens to clicks.
// After 3 clicks, remove the listener and show: "No more clicks allowed".
// // 13
// Add click listeners to both document and window.
// Show what happens when you click anywhere on the page.
// Log which event fires first.


// document.addEventListener("keydown",(e)=>{
//     console.log(e.key)
//     console.log(window.outerWidth) // inlcude whole browser 
//     console.log(window.outerHeight)
//     console.log(screen.width)  // whole screen
//     console.log(screen.height)
// })

// window.addEventListener("resize",(e)=>{
//     console.log(window.innerWidth) // only viewport
//     console.log(window.innerHeight) 
//     console.log(window.outerWidth) // inlcude whole browser 
//     console.log(window.outerHeight)
//     console.log(screen.width)
//     console.log(screen.height)
// })



// let count=0
// let btn=document.querySelector(".clicks");

// let func=(e)=>{
//     console.log("hello")
//     if(count>=3){
//         btn.removeEventListener("click",func)
//     }
//     else{
//         console.log(count)
//     }
//     count++;
// }
//     btn.addEventListener("click",func)


// bubbling -> event propegation
// window.addEventListener("click",(e)=>{
//     console.log("window",e.clientX)
// })

// document.addEventListener("click",(e)=>{
//     console.log("document",e.clientX)
// })

// capturing -> event propagation

// window.addEventListener("click",(e)=>{
//     console.log("window",e.clientX)
// },{
//     capture:true
// })

// document.addEventListener("click",(e)=>{
//     console.log("document",e.clientX)
// },{
//   capture:true
// })


// 11
let width=0;
let viewportWidth=window.innerWidth;
let lastScrollTop = window.scrollY;

window.addEventListener("scrollend",()=>{
  let pageHeight=document.documentElement.scrollHeight; // total page height
  let newWidth;
  let currentScrollH=window.scrollY; // only the scrolled part 
  let totalscrolledandVisible=currentScrollH+window.innerHeight;
  if(currentScrollH>lastScrollTop){
    newWidth=((viewportWidth*totalscrolledandVisible)/pageHeight);
    console.log(newWidth)
    console.log(viewportWidth)
    document.querySelector(".div").style.width=newWidth+"px";
    lastScrollTop=currentScrollH
  }
  else if(currentScrollH<lastScrollTop && currentScrollH!=0){
    newWidth=(viewportWidth*totalscrolledandVisible)/pageHeight;
    document.querySelector(".div").style.width=newWidth+"px";
  }
  else if(currentScrollH==0){
    newWidth=0
    document.querySelector(".div").style.width=newWidth+"px";
  }
  // console.log(window.scrollY)
})

// how to get the exact height of scroll position