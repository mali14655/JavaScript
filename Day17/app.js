
// stopping object properties from updation





// In JavaScript, you can make an object immutable (so that no one can change its properties) using built-in methods like (1)Object.freeze(), (2)Object.seal(), and (3)property descriptors.

// Object.freeze() makes an object fully immutable:
// You cannot add, delete, or change its properties.
// Properties become read-only.
// It’s shallow (only affects the top-level properties, not nested objects).

const user={
    userName:"Ali",
    details:{
        city:"Peshawar"
    }
}
Object.freeze(user)

// console.log(JSON.stringify(user))
console.log(user)
user.userName="Asim";
user.details.city="Islamabad"
console.log(user)

// to deep freeze

function deepFreeze(obj){
    Object.freeze(obj)
    Object.keys(obj).forEach((key)=>{
        if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
    })
}

deepFreeze(user)
user.details.city="Lahore";
console.log(user)


// If only want to freeze the structure
// Object.seal

const newUser={
    rollNo:12,
    batch:"25A"
}
Object.seal(newUser);

console.log(newUser)
newUser.batch="26B"
console.log(newUser);
newUser.details="xyz" // will not work
console.log(newUser)


// (3)property descriptors.
// You can lock specific properties using writable, configurable, and enumerable flags.

const userX={
    userName:"asim",
    userId:10,
    userRegNo:"12AXB"
}
let descriptor=Object.getOwnPropertyDescriptor(userX,"userName");
console.log(descriptor)
Object.defineProperty(userX,"userName",{
    writable:false
});

userX.userName="Ali";
userX.userId=12;
console.log(userX)

// setting enumerable
// mean this value will appear or not during iteration
for(let [key,value] of Object.entries(userX)){
    console.log(key," ", value)
}
Object.defineProperty(userX,"userName",{
    writable:false,
    enumerable:false
});

// now will not appear here
for(let [key,value] of Object.entries(userX)){
    console.log(key," ", value)
}

