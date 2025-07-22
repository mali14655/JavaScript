// control Flow

// if(condition){
// // either this executes
// }
// else{
// // or this executes
// }

// let month = 2;

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   default:
//     console.log("Nothing Matches");
// }
// note
// if a case does not have break and it mathces and executes then all the cases below it if dont have break execute except default and if the rest of cases have break then the one next to the breakless executes case will execute;

// ternary Operator
// short hand if else
// condition?"true":"false";

// let isUserLoggedIn = true;

// let allowUser = isUserLoggedIn ? "yes allowed him" : "don't allow";

// console.log(allowUser)

// multiple cases
// let value = 223;
// let x =
//   value <= 10
//     ? "less than or equal to 10"
//     : value <= 20
//     ? "less than or equal to 20 and greater than 10"
//     : value <= 30
//     ? "less than or equal to 30 and greater than 20"
//     : "Excede the limit!";
// console.log(x);

// let object={};
// console.log(Object.keys(object).length===0);
// let object2={
//     userName:"ali",
//     userId:"2025A"
// };
// console.log(Object.keys(object2));
// console.log(Object.keys(object2).length===0);

// Nullesh Coalesing (??)
// use to provide a fallback or default value if the original value is undefined or null
// pick the first valid value from the list

// let nameFromDatabase;
// let userName=nameFromDatabase??"Guest";
// console.log(userName)

// combining with optional chaining
// optional chaining allowed us to safely acccess the nested values in an object.

// let person={
//     userName:"Ali",
//     address:{
//         city:"Malakand",
//     }
// }

// let address= `${person.address.city}, ${person.address.streetNo}`; // this will only give undefined
// let address2= `${person.address.city}, ${person.address.streetNo.xyz}`; //  but here it will give a typeError that will crash our website, so here we will use optional chaining to safely access the nested values

// let address3=`${person?.address?.city}, ${person?.address?.streetNo?.xyz ?? "Street No is not mentioned" }` // as the streetNo is undefined it will stop there and wil return undefined and thus nullish coalescing operator will assign the default value there
// console.log(address3)

// loops

// for(let i=0 ;i<10;i++){
//     if(i==5){
//         break; // break the loop and go outside the loop.
//     }
//     console.log(i)
// }

// for(let i=0 ;i<10;i++){
//     if(i==5){
//         continue; // skip this iteration only.
//     }
//     console.log(i)
// }

// this is internally like this
// {
//     let i=0
//     while(i<10){
//         console.log(i)
//         i++
//     }
// }

// let i=0;
// while(i<10){
//     console.log(i)
//     i++
// }

// let x=2;
// do{
//     console.log(`${x} hello`)
//     x++;
// }while(x<10)

// iterables
// Objects that can be looped over using for of loop are iterables, they basically have a symbol.iterator prooperty which have a function that returns an iterator object that have a next() method when called return an object {value:"value",done:false/true};
// "array,string,map,sets,dom nodelist" are iterables.

// let array=["abc","xyz"];
// let iterator=array[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// for of loop
// used on iterables only, looped over the values
// let arr=[1,2,3,4,5];
// for(let val of arr){
//     console.log(val)
// }

// for in loop
// can be used on any obejcts, it iterates over the keys

// for(let key in arr){
//     console.log(arr[key])
// }

// Map
//  map is key-value pairs like object but is more powerful
// keys can be of any type, maintian insertion order

// let map=new Map();
// let map= new Map(
//     [["userNameInitial","Asim"]]
// )
// map.set("userName","Ali")
// map.set("userId","2025A")
// // console.log(map.has("userId"))
// if(map.has("userId")){
//     console.log(map.get("userId"))
// }
// console.log(map.size)
// console.log(map)
// map.delete("userId")
// // map.clear()
// let key1={id:1};
// map.set(key1,"user1");

// console.log(typeof map)
// for(let val of map){
//     console.log(val)
// }

// for(let [key,value] of map){
//     console.log(`${key} :- ${value}`)
// }

// for(let keys of map.keys()){
//     console.log(keys)
// }

// for(let values of map.values()){
//     console.log(values)
// }

// for(let [key,val] of map.entries()){
//     console.log(key,val)
// }
// for (let xyz of map.entries()){
//     console.log(xyz)
//     for(let abc in xyz){
//         console.log(abc)
//     }
// }
// let key={};
// let object={
//     UserName:"ali"
// }

// object[key]="hello";
// console.log(object[key])
// console.log(object) // here the key become [object Object] while in maps it is as it is.

// set
// A Set is a collection of unique values.
// No duplicates allowed
// Maintains insertion order
// Values can be any type (object, primitive)

// let set=new Set();
// or 
// let set=new Set([1,2,3,4,5])

// set.add(1)
// set.add(2)
// set.add(3)
// set.add({
//     userName:"Ali"
// })
// set.add({
//     userName:"Ali"
// })
// console.log(typeof set) // object
// console.log( set)
// console.log(set.has(2))
// console.log(set.has(10))

// for(let val of set){
//     console.log(val)
// }
// for( let xyz in set){
//     console.log(xyz)  // as set does not have keys so nothing prints
// }


// forEach,filter,reduce,map

// forEach
// only iterate over each value and perform operation on it if defined, does not return any thing.

let arr=[1,2,3,4,1,1,1,3,3,3,2];
// arr.forEach((val)=>{
//     console.log(val)
// })



// filter
//  return an array of values if it meets the given condition
// let newArray=arr.filter(num=>num>2);
// let newArray=arr.filter((num)=>num>2);
// console.log(newArray)


// map
//  iterate over all values and return something for each value

// let newArray=arr.map((val)=>val*2);
// console.log(newArray)


// reduce
// only return a single value

// let sum=arr.reduce((acc,currentValue,indexedDB,array)=> acc+currentValue)
// let newObject=arr.reduce((acc,currentValue,indexedDB,array)=> {
//     if(acc[currentValue]){
//         acc[currentValue]++;
//     }
//     else{
//         acc[currentValue]=1
//     }
//     return acc},{})
// console.log(newObject)

// let newArray=arr.reduce((acc,curentValue)=>{
//         if(curentValue<3){
//             acc.push("hello")
//         }
//     return acc;
// },[])

// console.log(newArray)








// if(function xyz(){console.lo("hello")}){
//     console.log(typeof xyz) // undefined
// }
// because it is now a function expression and is not hoisted and nor it become part of global object if named and is only accesible inside it self
