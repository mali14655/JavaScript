// Static Methods in classes
// methods which is belongs to the class only and not to the instances
// uses cases
// utility and factory methods
// utility -> helper functions
// A utility method is a function that performs a helper or reusable task, but it does not depend on a specific instance of a class.
// Factory -> A factory method is a method (often static) that creates and returns new objects or instances, often with some pre-configured properties or logic.It is called "factory" because it works like a factory that "produces" objects.

// for example
// utility methods
class Maths{

    static add(a,b){
        return a+b
    }
    static sub(a,b){
        return a-b
    }
}

class validity{
    static isValidName(username){
        if(username.length>10){
            return "Not Allowed"
        }
        else{
            return "Valid"
        }
    }
}


console.log(Maths.add(1,2))
console.log(Maths.sub(10,2))
console.log(validity.isValidName("AhmadAli"))
console.log(validity.isValidName("AhmadAlikhanUsmani"));

// also
class object{
    constructor(obj){
        this.__proto__=obj
    }

 static create(obj){
        return new object(obj)
    }
}

const obj=Object.create(null);
const newObj=object.create(obj);
console.log(newObj)



// Factory methods
class UserX{
    constructor(username,role){
        this.username=username
        this.role=role
    }
    static CreateAdmin(username,){
        return new UserX(username,"Admin")
    }
}

const admin=UserX.CreateAdmin("Ali")
console.log(admin)



// Getter and Setter
// get and set before the methods-> get value and set values of properties

class xyz{
    constructor(username){
        this.username=username
    }
    get getUserName(){
        return this.username
    }
    set setUserName(username){
        this.username=username
    }
}

const abc= new xyz("abc")
console.log(abc.username)
console.log(abc.getUserName)
abc.setUserName="Ahmad"
console.log(abc.getUserName)



// Bind
// real world scenario
// bind – Fixing this in Callbacks
// bind is commonly used when you pass a class method as a callback (e.g., in UI frameworks or event listeners) because this would otherwise get lost.
// Scenario: Event listener in a UI app

// in event listeners this values depends
// for example

// document.querySelector("#this").addEventListener("click",function(){
//     console.log(this) // will points to the element right
// })
// document.querySelector("#this").addEventListener("click",()=>{
//     console.log(this) // will points to window in non-strict mode
// })

// if inside a class
class React{
    constructor(server,id){
        this.id=id
        this.server=server
        // document.querySelector("#this").addEventListener("click",this.handleClick) // here in event handler this is now poointing to the element and thus  in element server is not defined

        document.querySelector("#this").addEventListener("click",this.handleClick.bind(this)) // here we have bind handleclick permanetly to the current object htat will be created by this class
    }
    handleClick(){
        console.log(this.server)
    }
}

const server=new React("abcServer",12)


// call
// call allows one object to borrow a method from another object.
//  immedialtely call the fucntion with this attached 
// Reusing generic methods across objects.
// for example

const utility={
    addSalary(salary){
        return salary.reduce((acc,salary)=> acc+salary)
    }
}


const User1={
    username:"Ali",
    salary:[1000,200,2000,500,400]
}
const User2={
    username:"Ali",
    salary:[1000,200,2000,500,400,1000,200,222,39934]
}
console.log(utility.addSalary.call(User1,User1.salary))
console.log(utility.addSalary.call(User2,User2.salary))

// apply  Working with Dynamic Arguments
// apply is useful when you need to pass arguments in an array form.
const sales = [1500, 2500, 3000, 1800];

const maxSale = Math.max.apply(null, sales); 
console.log(maxSale); // 3000


