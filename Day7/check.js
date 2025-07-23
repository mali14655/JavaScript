// DOM

//Document object model of html document created by the browser
/* 
steps

browser load html
parses html 
creat a tree like structure in which each node is a js object
nodes-> element node(tag), text node(content inside the node), comment nodes {this tree is know as DOM}

also create cssom
combines both to Render tree and then paints it on the screen 

note
the css loading does not stops the html parsing, it loads in parrallel but js loading do stop if by default
*/



// WINDOW OBJECT

// a global object created by the browser for each tab when opened
// contain the document,browser apis,NAVIGATOR,localstorage,history,location global variables and functions and methods like console,alert etc
// window.xyz or simply we can use xyz(any thing that is in window)


var x=10; // becomes a part of global object window but not let and const

// this becomes a part of global object too
function check(){
    console.log("Hey i am global function")
}

// this becomes a part of global object as well
var newCheck=()=>{
    console.log("Hey i am  new global function")
}



