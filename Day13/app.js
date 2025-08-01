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
// obj.__proto__ ---> Object.propotote ---> null


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

// let object={
//     username:"ali",
// }

// // adding to object[[prototype]]-> actually here the Object.prototype

// object.__proto__.greet=function(){
//     console.log(this.username)
// }
// console.log(Object.prototype)  // greet added here
// console.log(object)   


// function Person(name){
//     this.name=name;
// }

// console.log(Person.prototype.hello=function(){
//     console.log("hi")
// })

// console.log(Person.prototype) //-> Object which will be the parent of the next child that will inherit from this object

// let ali=new Person("ali")
// console.log(ali.__proto__)  // will be Person.prototype which has its properties and methods as well [[prototype]]-> reefernece to Object.protoype


// section 2

// classes in js-> not true classes but it is actually syntactic sugar over the constructor functions
// A class is just a nicer syntax to create a constructor function and set up the prototype chain.

// for example

class Car{
    constructor(name){
        this.name=name
        }
    break(){
        console.log("Break"+" "+this.name)
    }
}

const HondaCity=new Car("HondaCity");

// same as this
function CarX(name){
    this.name=name;
}

// injecting my own functionalty  
CarX.prototype.break=function(){
    console.log(`Break Please! ${this.name}`)
}

const Vezel=new CarX("Vezel");

console.log(HondaCity)
console.log(HondaCity.break())
console.log(Vezel.break());




// all functions/ constructor fucntion(Arrays,Objects,Date) etc have a property called prototype which is an object that it will provide to the objects that will be inherited from it and there we have [[prototype]] which is accessed by  .__proto__

// If we see Array.prototype
// then it is an object haing some array methods and reference to Object.prototype
console.log(Array.prototype) //

const obj={};
console.log(Object.getPrototypeOf(obj)) // to get its prototype or
console.log(obj.__proto__) 

//an o/bject having no prototype    
const object=Object.create(null)
console.log(object) // have no 










// setting prototype of an Object

let Teacher={
    userName:"Ali",
    greet(){
        console.log(`Welcome ${this.userName}`)
    }
}

//(1) one way to set prototype
let student={
    userName:"Asim",
    __proto__:Teacher,
}
console.log(student)
student.greet();
//(2) another way
let newStudent={
    userName:"asheesh"
}

Object.setPrototypeOf(newStudent,Teacher)
console.log(newStudent.greet()) 

// (3) another way
let newnewStudent=Object.create(Teacher);
newnewStudent.userName="hitesh"
console.log(newnewStudent)
newnewStudent.greet();

// (4) another way
let xyzStudent={
    userName:"XYZ"
}

xyzStudent.__proto__=Teacher
console.log(xyzStudent)

// injecting own function
xyzStudent.__proto__.getName=function(){
    console.log(this.userName)
}
Teacher.getName();
xyzStudent.getName()
student.getName();
newStudent.getName()
newnewStudent.getName()


