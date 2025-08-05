
// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         console.log(count)
//     }
// }

// let fun=outer();
// fun()
// fun()
// fun()


// // data hiding
// function createCart() {
//     let items = []; // private variable

//     return {
//         addItem(item) {
//             items.push(item);
//             console.log(`${item} added`);
//         },
//         viewCart() {
//             return [...items]; // returns a copy
//         }
//     };
// }


// const cart = createCart();
// cart.addItem("Book");
// cart.addItem("Pen");
// console.log(cart.viewCart()); // ["Book", "Pen"]
// console.log(cart.items); // undefined (private)




// What is JavaScript Runtime?
// A runtime is the environment where your JavaScript code executes. It provides the engine (like V8) plus APIs that aren't part of the JavaScript language itself.


// Browser Runtime
// Engine: V8 (Chrome/Edge), SpiderMonkey (Firefox), JavaScriptCore (Safari)

// APIs available:

// DOM APIs (document, window, querySelector)

// fetch, localStorage, alert, etc.

// Event Loop: Handles UI events and async callbacks.


// Node.js Runtime
// Engine: V8

// APIs available:
// File system: fs
// Networking: http
// Process management
// No window or document

// Event Loop: Same concept as browser but without UI.
// Use case: Backend servers, CLI tools.



// Stack
// Stores primitive values and function calls.
// Follows LIFO (Last In, First Out).

// Heap
// Stores objects and functions (reference types).
// No strict order.

// Garbage Collection
// JS automatically frees memory that's no longer referenced.
// let obj = { data: "test" };
// obj = null; // previous object is garbage collected

// Scope Chain
// The scope chain is about variable resolution at runtime.
// It tells JavaScript where to look for variables when you access them inside a function.
// How it works
// Every execution context (function or block) creates a Lexical Environment.
// Each lexical environment has:
// Environment Record → local variables/functions.
// Outer Lexical Environment Reference → a pointer to the parent scope.
// When you try to access a variable:
// JS looks in the current lexical environment.
// If not found, it follows the outer lexical environment reference (parent scope).
// This continues until it reaches the global scope.
// If still not found → ReferenceError.
// Example: Scope Chain
// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();
// Resolution:
// c → found in inner’s lexical environment.
// b → not in inner, goes to outer.
// a → not in inner, not in outer, goes to global.
// Scope chain is static → determined by the code structure (lexical scope), not runtime.

// Prototype Chain
// The prototype chain is about property/method resolution on objects.
// It tells JavaScript where to look for properties when you access them on an object.
// How it works
// Every object in JS has a hidden property [[Prototype]] (accessible via __proto__).
// When you access a property:
// JS looks on the object itself.
// If not found, it looks at the object's [[Prototype]].
// Then it looks at that prototype’s prototype.
// Continues until Object.prototype or null.
// Example: Prototype Chain
// const parent = {
//   greet() {
//     console.log("Hello from parent");
//   }
// };

// const child = Object.create(parent);
// child.sayHi = function() {
//   console.log("Hi from child");
// };

// child.sayHi();  // Found on child
// child.greet();  // Not on child → found on parent (via prototype chain)
// Prototype chain is dynamic → determined at runtime via the object's [[Prototype]].





// Debounce
// Debouncing is a performance optimization technique used to control how frequently a function is executed, especially when triggered by events that fire rapidly (like input, resize, scroll).
// Waits until the user stops triggering the event for a specific time.
// Common for search input.
// we limit or give specific scenario to the function to be called which is called many times

//(1) manual for one input
// let timer=undefined;
// input.addEventListener("input",function(){
//     clearTimeout(timer)
//     timer=setTimeout(() => {
//         console.log(this.value)
//     }, 500);
// })

// clearTimeout(undefined);
// clearTimeout(null);
// it simply does nothing.
// It does NOT throw an error.
// This is intentional behavior in JavaScript to make debouncing/throttling patterns safe, because you almost always clear a timer before it has been set for the first time.



//(2) debounce fucntion that will be reuse
// function debounce(func,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(() => {
//             func.apply(this)
//         }, delay);
//     }
// }

// let inputUserName=document.querySelector("#username");
// let inputNumber=document.querySelector("#number");
// let button=document.querySelector("button");


// let loguserName=debounce(function(){
//     console.log(this.value)
// },500)
// let logNumber=debounce(function(){
//     console.log(this.value)
// },400)

// let logClick=debounce(function(){
//     console.log(this.innerText)
// },500)

// inputUserName.addEventListener('input',loguserName);
// inputNumber.addEventListener('input',logNumber);
// button.addEventListener('click',logClick);


// Debouncing Practice


let input=document.querySelector("#name");

// function debounce(callback,delay){
//     let timer;
//     return function(event){
//         console.log(event.target)
//         // console.log(this) // as this is stored in the logValue and its this is set hihc target the input.
//         clearTimeout(timer)
//         timer=setTimeout(() => {
//             callback.call(this);
//         }, delay);
//     }
// }

// let logValue=debounce(function(){
//     console.log(this.value)
// },500)

// input.addEventListener('input',logValue);

// input.addEventListener('input',debounce(function(){
//     console.log(this.value)
// },500));

// or we can also do it for a single elemnt or fucniton as 

// let timer;
// input.addEventListener('input',(event)=>{
//     clearTimeout(timer);
//     timer=setTimeout(() => {
//         console.log(event.target.value)
//     }, 500);
// })


// Throttling 
// Throttling ensures that a function executes at most once in a fixed time interval, even if the event keeps firing.
// It ignores extra calls until the delay expires.
// How it works:
// When an event is triggered, if the function isn’t running in the cooldown period, execute it.
// Block subsequent calls until the interval has passed.

console.log(Date.now())


// we have to store how much time before this function was called right
// as in throtling we are doing such that we are limiting function calls to execute only once in a specific amount if time let say 1minute, so it will be called only once in in one minute;
// you must be doing activity then only the timmer is check


let input2=document.querySelector("#name2")
// let lastCall=0;
// input2.addEventListener("input",(event)=>{
//     let time=Date.now();
//     if((time-lastCall)>=5000){
//         lastCall=time;
//         console.log(event.target.value)
//     }
// })

// or making a fuction

function throtle(callback,delay){
    let lastCall=0;
    return function(event){
        let time=Date.now();
        if(time-lastCall>=delay){
            lastCall=time;
            callback(event)
        }
    }
}
let logValue=
input2.addEventListener("input",throtle((event)=>{
console.log(event.target.value)
},1000))


// Throttling:
// Scroll events (e.g. updating scroll position, lazy loading images)
// Window resize handling
// Mouse movement tracking (e.g. dragging)
// Limiting API calls to a fixed rate

// Debouncing:
// Search input (wait for user to stop typing)
// Preventing double button clicks

// Throttle = run at intervals while event is firing.
// Debounce = run after event stops firing.













// Local Storage // browser apis
// What it is:
// Key-value storage that persists even after browser refresh or closing the tab.

// ***************Shared across all tabs for the same domain.

// Use cases:
// Theme settings (dark/light mode).

// Saving user preferences (language).

// Caching small data like auth tokens (⚠ not secure for sensitive data).


// Save data
// localStorage.setItem("theme", "dark");
// localStorage.setItem("array", JSON.stringify([1,2,3,4])); // same for objects

// Read data
// console.log(localStorage.getItem("theme")); // "dark"
// console.log(JSON.parse(localStorage.getItem("array"))); // "dark"

// Remove data
// localStorage.removeItem("theme");

// Clear everything
// localStorage.clear();



// Session Storage
// What it is:
// Same API as localStorage.

// ************Data is per-tab and removed when the tab closes.

// Use cases:
// Temporary data for a single tab.

document.querySelector(".session").addEventListener("click",()=>{
    sessionStorage.setItem("step", "2");
    console.log(sessionStorage.getItem("step")); // "2"
})
// sessionStorage.removeItem("step");



 IndexedDB
// What it is:
// A full NoSQL database inside the browser.
// Can store structured data (objects, arrays, blobs, images).
// Asynchronous API.

// Use cases:
// Offline apps.
// Storing large datasets (e.g., messages in a chat app).
// Progressive Web Apps (PWAs).