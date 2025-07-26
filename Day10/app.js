
// asynchronus js

// callback hell

// -> login user;
// -> fetch his data;
// -> send his data

// function loginUser(name, callback) {
//   setTimeout(() => {
//     console.log(`${name} Logged In!`);
//     callback("2");
//   }, 2000);
// }

// function fetchData(userId, callback) {
//   setTimeout(() => {
//     console.log("data has been fetched");
//     callback("xyz");
//   }, 2000);
// }

// function sendData(data) {
//   setTimeout(() => {
//     console.log("data sent");
//   }, 2000);
// }

// here callback hell is
// loginUser("Ali",()=>{
//     fetchData(12,()=>{
//         sendData("xyz")
//     })
// })


// now doing it with promise and promise chaining
function data1(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`data ${id} fetched!`)
        }, 2000);
    })
}
function data2(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`data ${id} fetched!`)
        }, 2000);
    })
}
function data3(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`data ${id} fetched!`)
        }, 2000);
    })
}

// Promise chaining
// data1(10)
// .then((result)=>{
//     console.log(result)
//     return data2(20)
// })
// .then((result)=>{
//     console.log(result)
//     return data3(30)
// })
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })

// let promise=new Promise((res,rej)=>{
//     // res("10")
//     rej("Error")
// })
// console.log(promise)


// understanding async/await that how it returns a Promise
// if not return a value in this fucntion then will return undefined in promise value
// if reutrn a value then that vaue become the promise value
// if throw err then that becmomce the value
// how just throw and throw new Error works

// async function  Hello(err) {
//     console.log("hello")
//     if(err){
//         // throw "hi" // just a string
//         throw new Error("Something went Wrong") // proper error object with a message and stack trace(A stack trace is a report that shows where an error occurred in your code — and how the program got there.)
//     }
//     return 10 // it goes into the promise value
// }
// Hello(true)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// Hello(false)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.message)
// })
// Hello()
// .then((res)=>{
//     console.log(res)
// })


// now let's do that above task with async/await

// async function FetchData() {
    
//     try {
//        let res1= await data1(10);
//        console.log(res1)
//        let res2 =await data2(20);
//        console.log(res2)
//        let res3= await data3(30);
//        console.log(res3)
       
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// FetchData()



