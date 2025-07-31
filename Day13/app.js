// confusion in prototype
// Prototype (concept) is an object from which other objects can inherit .
// An object that acts as a "blueprint" from which another object can inherit properties and methods.
// prototype property (on functions): A special property on constructor functions that points to the object which will become the prototype of new instances created with new.

// Object is a constructor funtion 
// console.log(typeof Object) // fucntion
// it has a property prototype
// console.log(Object.prototype)  // -> object which is parent of every object

// normal object creation
// const obj = {};
// obj.__proto__ ---> Object.prypotote ---> null


// object creation through constructor funtion

// function Person(username){
//     this.username=username
// }
// console.log(Person.prototype)
// JavaScript automatically gives it a property called prototype, which is an object:
// And Person.prototype.__proto__ is Object.prototype.

// let ali=new Person("ali");

// console.log(ali.__proto__) -> to check its prototype(from where it has inherited)


// to check from where an object has inherited then 
// object.__proto__ -> points to the prototype of this object
//the Parent of every object is Object.prototype-> an object which has methods
// and Object itself is a constructor funtion actually so it has the prototype property which every constructor function have which has all its properties, methods and a [[Prototype]] property which points toward the Object.prototype

let object={
    username:"ali",
}

// adding to object[[prototype]]-> actually here the Object.prototype

object.__proto__.greet=function(){
    console.log(this.username)
}
console.log(Object.prototype)  // greet added here
console.log(object)   


function Person(name){
    this.name=name;
}

console.log(Person.prototype.hello=function(){
    console.log("hi")
})

console.log(Person.prototype) //-> Object which will be the parent of the next child that will inherit from this object

let ali=new Person("ali")
console.log(ali.__proto__)  // will be Person.prototype which has its properties and methods as well [[prototype]]-> reefernece to Object.protoype