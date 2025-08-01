// OPP (Object Oriented Programing)


class Animal {
  #name; // private

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
  setName(name) {
    this.#name = name;
  }
}

let dog = new Animal("Tyson");

console.log(dog.name); // undefined
console.log(dog.getName()); // this will print now Tyson
dog.setName("Mike"); // setting name
console.log(dog.getName()); // Mike

// Class is a blueprint created created for the objects

// Abstraction
// A concept that we hide the unecessary details from the user and just give him simple interface ti use things like here in animal we have hide the details how to set and access the name jus call the setName with name ti set name and getName to access name

// Encapsulation
// In opp we define the properties and methods inside a single unit(class) so everything is encapsuled and wull structure

// Inheritance
// In opp one class can inherit another class properties and methods(public) by simply inheriting that class
// multiple inheritance is not possible in js but we can use mixin behaviour here
// mixin -> actually a class which is not part of the inheritnace hierarchy but it just define methods and provides it to other objects

// polyMorphism (multiple shapes/forms)
// when methods have same signatures but different baheviour
// possible through methods overriding
// also we have another concept of method overlaoding that is having same name but differnt parmeter list or type or numbers etc-> in same class but not natively possible in javascript althouh we can mimic that using rest params operator

// signature of a funtion include the 
// return type
// function name
// and params list


class Car {
  name;
  model;

  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  getDetails() {
    return this.name + " " + this.model;
  }
  start() {
    return `${this.name} is starting`;
  }
}

// inheritance
class Civic extends Car {
  color;
  constructor(name, model, color) {
    super(name, model);
    this.color = color;
  }
  // method overridding
  getDetails() {
    return this.name + " " + this.model + " " + this.color;
  }
}

let blackCivic = new Civic("Civic", 2012, "Black");

console.log(blackCivic.getDetails());

// example of method overloading
class xyz {
  add(x, y) {
    return x + y;
  }
  add(x, y, z) {
    return x + y + z;
  }
}

let obj = new xyz();
console.log(obj.add(2, 3)); //-> result in NaN bacause the funtion written below overwrite above funtion

// so to mimic the oveerloading behaviour
class abc {
    add(...nums) {
        return nums.length == 2
        ? nums[0] + nums[1]
        : nums.length == 3
        ? nums[0] + nums[1] + nums[2]
        : "Not supported";
    }
}

let objA = new abc();
console.log(objA.add(2, 3));
console.log(objA.add(2, 3,1));


// multiple inhertance example
const A={
    speak(){
        console.log("speak!")
    }
}
const B={
    eat(){
        console.log("eat!")
    }
}

class C{

}

// Object.assign(target,objtocopy,objtocopy) merge objects into a single object
Object.assign(C.__proto__,A,B);  //if C is object
Object.assign(C.prototype,A,B); // if C is classs
console.log(new C);



//Now comming to js oops

// Object Literals
// a way to create objects
const user={
    userName:"Ali",
    batch:25
}

console.log(user)

// Consturctor functions
function User(userName,batch){
    this.userName=userName
    this.batch=batch
}

const userOne=new User("ali",25)
const userTwo=new User("asim",26)
console.log(userOne,userTwo)



// what does new mean

// when we sue new
// (1) new creates a new object on heap and return its reference
// (2) link a prototype to the object -> new object created gets linked to the prototype property of the constructor function 
// (3) the constructor function is called with arguments and when there is no explicit return value in the constructor function js assumes (this) the newly creatd object to be return value 




