
function outer(){
    let count=0;
    return function inner(){
        count++;
        console.log(count)
    }
}

let fun=outer();
fun()
fun()
fun()


// data hiding
function createCart() {
    let items = []; // private variable

    return {
        addItem(item) {
            items.push(item);
            console.log(`${item} added`);
        },
        viewCart() {
            return [...items]; // returns a copy
        }
    };
}


const cart = createCart();
cart.addItem("Book");
cart.addItem("Pen");
console.log(cart.viewCart()); // ["Book", "Pen"]
console.log(cart.items); // undefined (private)




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
function debounce(func,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(() => {
            func.apply(this)
        }, delay);
    }
}

let inputUserName=document.querySelector("#username");
let inputNumber=document.querySelector("#number");
let button=document.querySelector("button");


let loguserName=debounce(function(){
    console.log(this.value)
},500)
let logNumber=debounce(function(){
    console.log(this.value)
},400)

let logClick=debounce(function(){
    console.log(this.innerText)
},500)

inputUserName.addEventListener('input',loguserName);
inputNumber.addEventListener('input',logNumber);
button.addEventListener('click',logClick);

// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme"));

// sessionStorage.setItem("sessionId", "12345");
// console.log(sessionStorage.getItem("sessionId"));
