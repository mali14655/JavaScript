// **************************DOM EVENTS*******************************
1;
// Add a click event listener to each button and log the button's text
// let btns=document.querySelectorAll(".btn");
// btns.forEach((item)=>{
//     item.addEventListener("click",(e)=>{
//         console.log(e.target.textContent)
//     })
// })

// // alternative

// document.querySelector("body").addEventListener("click",(e)=>{
//     console.log(e.target.textContent)
// })

2;
// Use event delegation (one listener on #list).
// On clicking an <li>, log its text.
// On clicking #addItem, dynamically add a new <li> (and clicking it should also work!).

// let list = document.getElementById("list");

// list.addEventListener("click", (e) => {
//   if ((e.target.tagName = "li")) {
//     console.log(e.target.textContent);
//   }
// });

// document.getElementById("addItem").addEventListener("click", (e) => {
//   let li = document.createElement("li");
//   li.innerText = "New li added";
//   list.append(li);
// });

// 3
// Add click listeners to outer, inner, and clickMe.
// Use both capturing (true) and bubbling (false).
// Log the phase clearly ("OUTER Capturing", "INNER Bubbling", etc.).
// Try stopping propagation in inner to see effect.

// bubling
// document.getElementById("outer").addEventListener("click",(e)=>{
//     console.log("outer-bubbling")
// })
// document.getElementById("inner").addEventListener("click",(e)=>{
//     console.log("inner-bubbling")
// })
// document.getElementById("clickMe").addEventListener("click",(e)=>{
//     e.stopPropagation()
//     console.log("btn-bubbling")
// })

// capturing
// document.getElementById("outer").addEventListener("click",(e)=>{
//     console.log("outer-capturing")
// },true)
// document.getElementById("inner").addEventListener("click",(e)=>{
//     e.stopPropagation() // stop propagation of event further
//     console.log("inner-capturing")
// },true)
// document.getElementById("clickMe").addEventListener("click",(e)=>{
//     console.log("btn-capturing")
// },true)

// 4
// On key press in #typeBox, log key, code, keyCode.
// On mouseover of #mouseBtn, log screenX, clientX, target, currentTarget.

// document.getElementById("typeBox").addEventListener("keypress",(e)=>{
//     if(e.ctrlKey){ // only when ctrlKey is pressed
//         console.log(e.key) // writeen on keyboard button
//         console.log(e.code) // name of key
//         console.log(e.keyCode); // number

//     }
// })

// document.getElementById("mouseBtn").addEventListener("mouseover",(e)=>{
//     console.log(e.screenY, "screen y")
//     console.log(e.clientY, "client Y")
//     console.log(e.target)
//     console.log(e.currentTarget)
// })

// 5
// Log "Button Clicked!" on first click.
// After that, remove the listener so further clicks do nothing.

// document.getElementById("onceBtn").addEventListener("click",(e)=>{
//     console.log(e.target.textContent)

// },{once:true})

// alternative
// function once(e){
//         console.log(e.target.textContent)
//         btn.removeEventListener("click",once);
// }

// let btn=document.getElementById("onceBtn")
// btn.addEventListener("click",once);

let isHolding = false;
let div = document.getElementById("div");
let mouseX = 0;
let mouseY = 0;
let intervalId = null;



div.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

div.addEventListener("mousedown", (e) => {
isHolding = true;
intervalId = setInterval(() => {
    if (isHolding && e.target.id!="eraser") {
      startHoldAction();
    }
  }, 50);
});

div.addEventListener("mouseup", (e) => {
  isHolding = false;
  clearInterval(intervalId);
});

function startHoldAction(e) {
    let newdiv = document.createElement("div");
    newdiv.id = "newdiv";
    newdiv.style.top = `${mouseY}px`;
    newdiv.style.left = `${mouseX}px`;
    div.append(newdiv);
}

let remove=false;
let eraserbtn=document.getElementById("eraser");
eraserbtn.addEventListener('click',(e)=>{
    remove=!remove;
})
let eraser=div.addEventListener("mousemove",(e)=>{
    
    if(remove){
        if(e.target.id="div"){
        
        }else{
            e.target.remove()
        
        }

    }
})