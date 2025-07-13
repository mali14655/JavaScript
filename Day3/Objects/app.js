// let object1={
//     abc:"abc"
// }
// let object2={
//     abc:"ac"
// }
// let object3={
//     abc:"c"
// }

// let target=Object.assign(object1,object2,object3) // returning actually the object 1

// console.log(object1==target)
// console.log(target)

// console.log(Object.prototype);

// let Singleton={}

// class Singleton {
//   static instance = 0;

//   constructor(name, rollNo) {
//     if (Singleton.instance == 0) {
//       this.name = name;
//       this.rollNo = rollNo;
//     Singleton.instance++;
//     }
//     else{
//          throw {
//             error:"Can't make more instances"
//          };
//     }
//   }
// }


// let object=new Singleton("ali",5)
// // let object2=new Singleton("ahmad",6)

// console.log(object)
// // console.log(object2)

var name="ali";

// let object={
//     name:"ahmad",
//     greet:function(){
//         console.log(`${this.name}`)
//     }
// }

// let fun=object.greet; // if funtion is extracted from object then this does not points to that object then;
// fun();

// function Abject(name){
//     this.name=name,
//     this.greet=function(){
//         console.log("hello")
//     }
// }
// Abject.prototype.hello=function(){
//     console.log(`hello this is ${this.name}`)
// };
// let obj1=new Abject("ali")
// // let obj=new Abject("ahmad")
// // console.log(obj1)
// // console.log(obj)

// let obj=Object.create(obj1);
// console.log(obj) 

// let object={
//     name:"Ali",
//     greet:function(){
//         console.log("hello")
//     }
// }

// console.log(object.__proto__.__proto__) // null
// let obj=Object.create(object);
// console.log(obj)

// function Person(name){
//     this.name=name;
//     Person.prototype.greet=function(){
//         console.log("hello")
//     }
// }


// console.log(Person.prototype)
// const obj1=new Person("Ali")
// const obj2=new Person("Ahmad")
// console.log(obj1)
// console.log(obj2)
// console.log(obj1.greet===obj2.greet)


// let obj=Object.create(null)

// console.log(obj)


// let object={
//     name:"Ali",
//     rollNO:3
// }

// Object.defineProperty(object,"xyz",{
//     value:"hello",
//     enumerable:false
// })

// for(let val in object){
//     console.log(object[val])
// }

// let json=JSON.stringify(object);
// console.log(json)
// console.log(object.xyz)
// console.log(object.__proto__.hello=function(){
//     console.log("hello")
// })

// let x={

// }

// console.log(x)
// console.log(object)

// let obj2=Object.create(object);
// console.log(obj2)

// console.log(Object.keys(object))
// console.log(Object.values(object))
// console.log(Object.entries(object))
// console.log(Object.hasOwn(object,"name"))

// let new1={
//     greet:function(){

//     }
// }
// Object.setPrototypeOf(object,new1)
// console.log(object)

// console.log(Object.getPrototypeOf(object))
// console.log(Object.getPrototypeOf(new1))


// let object1={
//     name:"Ali"
// }

// let object2={
//     rollNo:3
// }
// let object3={
//     batch:25
// }

// let result=Object.assign({},object1,object2,object3); // all goes to empty object
// let result=Object.assign(object1,object2,object3); // all goes to object1
// console.log(result);
// console.log(object1)