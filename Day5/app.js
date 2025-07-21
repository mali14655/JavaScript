// Understanding  "this" keyword in javaScript
"use strict"  // uncomment it if you want to see the behviour of 'this' in strict mode

console.log(this); // point to window object (global object);

// inside functions behaviour of this

// 1 normal funtions
// normal functions have there own this and is set according to the calling context(where is it called?, who call it?)

function testingThis() {
  console.log(this);
}

let testingThis2 = function () {
  console.log(this);
};

let testingThis3 = function hello() {
  console.log(this);
};

testingThis(); // window / undefined in strict mode
testingThis2(); // window / undefined in strict mode
testingThis3(); // window / undefined in strict mode

let object = { 
    userName: "ali" ,
    greet:function(){
        console.log(`Welcome ${this.userName}`)
    }
};


object.greet() // this refers to the object calling the function

let fun=object.greet;
// fun() // here this refers to window object now as the function no longer belongs to the object neither it is called with that object.
// in strict mode it give error for username



// with Call,Apply and Bind
// Sometimes you want to manually set the this value — that’s where call, apply, and bind come in.

let person={
    userName:"ahmad",
}

function welcome(greetting){
    console.log(` ${greetting} ${this.userName}`)
}
function welcomeForApply(greetting,ending){
    console.log(` ${greetting} ${this.userName} ${ending}`)
}

welcome.call(person,"hi") // call this funtion with ahmad
welcomeForApply.apply(person,["hello","Thank You"]) // do same as call but now takr arguments in array.

// while bind returns a new funtion and permanently bind this
let newFun=welcome.bind(person,"hello");
newFun()



//With event Listeners

let btn=document.querySelector(".btn");
btn.addEventListener('click',function(){
    console.log(this) // points to the element on which the listener is applied
})





// ArrowFunction and this
// arrow funtion inherits this from parent lexical scope or simply fro  the lexical scope (scope where the arrow funtion is written);

let arrowHello=()=>{
    console.log(this)  // window, as in this case the lexical scope is global scope and in global scope this points to the window object
}

arrowHello()

let object2={
    userName:"aliii",
    greet:()=>{
        console.log(this.userName) // undeifned as this is pointing towards the global object , in case of strict it is still window object becasue it inherits from the lexical scope, in this case which is global scope anf there this is window object
    }
}


object2.greet()
let object3={
    userName:"aliii",
    greet:function(){
        setTimeout(()=>{
        console.log(this.userName) // aliii because it now inherits this from the normal funtion which has its own this set to the object
    },2000)}
}
object3.greet();


// in case of event listeners
// btn.addEventListener('click',()=>{
//     console.log(this) // points to window object
// })

// note: bind,apply and call do not have any effect on arrow function as it does not have its own this 




