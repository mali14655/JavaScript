// JavaScript gives multiple ways to create objects.

// Object Literals
const obj = { name: "Ali", age: 25 };
console.log(obj.name); // Ali

// using new key word and Object constructor
const obj2 = new Object();
obj.name = "Ali";

// using constructor function
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}

const p1 = new Person("Ali");
p1.greet(); // Hello, I'm Ali

// using classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p2 = new Person("Ali");
p2.greet();

// using Object.create
const parent = {
  greet() {
    console.log("Hello");
  },
};
const child = Object.create(parent);

child.greet(); // Hello
console.log(Object.getPrototypeOf(child) === parent); // true

// Factory Function
// A normal function that returns an object.
function createPerson(name) {
  return {
    name,
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
}

const p3 = createPerson("Ali");

p3.greet();

// setting prototype

// Modern syntax

//(1)  Object.create(proto)
const parentA = {
  greet() {
    console.log("Hello");
  },
};
const childA = Object.create(parent);
child.greet();

// setting prototype of child to parent

// (2) Object.setPrototypeOf(obj, proto)
// Sets the prototype of an existing object.

const parent1 = {
  greet() {
    console.log("Hello");
  },
};
const child1 = {};
Object.setPrototypeOf(child, parent);
child.greet();

// some other ways

let Teacher = {
  userName: "Ali",
  greet() {
    console.log(`Welcome ${this.userName}`);
  },
};

//(1) one way to set prototype
let student = {
  userName: "Asim",
  __proto__: Teacher,
};
console.log(student);
student.greet();

// (2) another way
let xyzStudent = {
  userName: "XYZ",
};
xyzStudent.__proto__ = Teacher;
console.log(xyzStudent);

// injecting own function
xyzStudent.__proto__.getName = function () {
  console.log(this.userName);
};

// *******************************when we use new Key word

// (1)Create an empty object:
// (2)Set the prototype of the object to the constructor’s prototype:
// (3)Call the constructor function with this bound to the new object:
// (4)Return the object:
//         If the constructor returns an object explicitly → return that.
//         Otherwise, return the newly created object.

// this keyword
// if use with new->>>this → the new object created by new.

// manually setitng this

function greet() {
  console.log(this.name);
}
const person = { name: "Ali" };


// call and apply
// The function is executed immediately.
// During this single call, the engine binds this to person.

greet.call(person);  // Ali -->> call lets us manually bind this to person. call(objec,arg1,arg2.....)
greet.apply(person); // Ali -->> do same but apply(obj,[arg1,arg2.....])

// binds
// bind returns a new function object.
// No matter how you call that new function later, it remembers the bound object.(Permanenlty set this to that object)

const boundGreet = greet.bind(person); //Returns new function -->>Binds this permanently
boundGreet(); // Ali


