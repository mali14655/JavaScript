
// Functions



// function declaration / definition

    function hello(){
        console.log("hello")
    }

// function exxpression

let fun=function(){
    console.log("hi")                 // anonymous function-> no name
}

let fun2=function abc(){
    console.log("abc")                // named function-> cant call abc -> undefined
}

// fun2()


// arrow function

let x=()=>{

}


(function(){
                 //IIFE call directly
})();


function sayHello(username){
    if(!username){
        console.log("Enter UserName Please !");
        return;
    }
    return `Hello ${username}`
}

console.log(sayHello())