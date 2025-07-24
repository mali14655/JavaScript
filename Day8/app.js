// selectors
/*

*/
// document.getElementById // by id
// document.getElementsByClassName // by class ->collection
// document.getElementsByTagName // collection
// document.getElementsByName // attribut name -> Nodelist
// document.querySelector // one-> first match
// document.querySelectorAll // nodelist

// let xyz=document.getElementsByName("div")
// console.log("hello", xyz)

// let demo=document.querySelector(".demo");

// console.log(demo.innerHTML) // total inner html
// // demo.innerHTML="hello" set inner text of the demo
// // demo.innerHTML="<h2>hello</h2>" // inside demo insert the h2 and text which the browser actuallly parse annd show as h2
// console.log(demo.innerText)  // only visible plain text that is rendered
// // demo.innerText="hello" same as above
// // demo.innerText="<h2>hello</h2>" // browser does not parses it and set as it is
// console.log(demo.textContent) // all the plain text even if invisible
// demo.textContent="hello"  //same as above
// demo.textContent="<h2>hello</h2>" // browser does not parses it and set as it is

// let elementsNode=document.querySelectorAll(".first"); // Nodelist
// let elementsCollection=document.getElementsByClassName("first"); // Html collection
// console.log(elementsNode)
// console.log(elementsCollection)

// let newElement=document.createElement("h2");
// newElement.innerText="Hey"
// newElement.setAttribute("class","first")

// document.body.appendChild(newElement)

// console.log(elementsNode) // does not get updated when dom updates so it is static,
// console.log(elementsCollection) // get updated on dom updation and is live

// DOM

// let elements=document.getElementsByTagName("h1") // html collection
// let elementsH1=document.querySelectorAll("h1") // NodeList

// let collectionArray=Array.from(elements);
// let i=0;
// collectionArray.forEach((item)=>{
//     console.log(item.innerText+i)
//     i++
// })
// console.log(collectionArray)
// console.log(elements)
// console.log(elementsH1)

// console.log(document.links)
// console.log(document.scripts)

// let h1=document.querySelector(".hello");
// console.log(h1.closest(".hehe"))
// console.log(h1.parentNode);

// console.log(document.body.childNodes)

// Array.from(document.body.children).forEach((item)=>{
//     if(item.tagName!=="SCRIPT"){
//         console.log(item)
//     }
// })

// ************************************************Task*****************************************

//  Get main heading by ID
// Get all card titles using class
// Get second card using querySelector
// Get all delete buttons
// Get the form using tag or id

//  Get main heading by ID

let mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// Get all card titles using class

let allCardTitles = document.getElementsByClassName("card-title");
// to get innerText(titles) , we will convert this html collection into array
let array = Array.from(allCardTitles);
let titlesArray = array.map((item) => {
  return item.innerText;
});

console.log(titlesArray);

// Get second card using querySelector

let secondCard = document.querySelector("#card2");
console.log(secondCard);

let deleteButtons = document.querySelectorAll(".delete-btn");
console.log(deleteButtons);

// Get the form using tag or id

let form = document.getElementsByTagName("form");
console.log(form[0]);

// let formObject=new FormData(form[0])
// console.log(formObject.get(name here))

// Change text of card1’s paragraph to "Updated first card"
// Use innerHTML to add bold text inside card2’s paragraph
// Get and log the text inside the heading and description

let firstCard = document.getElementById("card1");
// let childsOfCard=firstCard.children;
// Array.from(childsOfCard).forEach((child)=>{
//     if(child.tagName=="P"){
//         child.innerText="Updated first card"
//     }
// })

// or if multiple childs and want to update first one only
// let firstCardfirstP=document.querySelector("#card1 > p");
// firstCardfirstP.innerText = "UPDATED CARD";

// Use innerHTML to add bold text inside card2’s paragraph

let card2P=document.querySelector("#card2 > p");
card2P.innerHTML="<b>Bold text</b>"

// Get and log the text inside the heading and description
let headingText=document.querySelector("#main-heading").innerText;
console.log(headingText)

let descriptionText=document.querySelector(".description").innerText;
console.log(descriptionText)


// Add a class 'active' to card3
// Toggle 'highlight' class on card3 on button click
// Check if card3 contains 'card' class


let card3=document.querySelector("#card3");

card3.classList.add("active")
let btn3=document.querySelectorAll(".edit-btn");

btn3[2].addEventListener('click',(e)=>{
  card3.classList.toggle("highlight")
})



// console.log(card3.classList.contains("card"))

// creating a card

//  <div class="card" id="card3">
//       <h3 class="card-title">Card 3</h3>
//       <p class="card-text">This is the third card.</p>
//       <button class="btn edit-btn">Edit</button>
//       <button class="btn delete-btn">Delete</button>
//     </div>
//   </div>

let cardNumber=3;

form[0].addEventListener("submit",(e)=>{
  e.preventDefault();
  let data=new FormData(form[0]);
  let title=data.get("title")
  let text=data.get("text")
  
  cardNumber++;
  let card=document.createElement('div')
  card.classList.add("card")
  card.id=`card${cardNumber}`
  
  let h3=document.createElement("h3");
  h3.classList.add("card-title");
  h3.innerText=title
  
  let p=document.createElement("p");
  p.classList.add("card-text");
  p.innerText=text;
  
  let editButton=document.createElement("button")
  editButton.classList.add("btn")
  editButton.classList.add("edit-btn")
  editButton.innerText="Edit"
  let deleteButton=document.createElement("button")
  deleteButton.innerText="Delete"
  deleteButton.classList.add("btn")
  deleteButton.classList.add("delete-btn")
  
  card.append(h3,p,editButton,deleteButton);
  let container=document.querySelector(".container");
  container.append(card)
  


})


// removing parent nodes using delete button
// let deletingButtons=document.querySelectorAll(".delete-btn");

// deletingButtons.forEach((item)=>{
//   item.addEventListener("click",(e)=>{
//     let parent=item.parentNode;
//     parent.remove();

//   })
// })


// event delegation
let container=document.querySelector(".container");
container.addEventListener("click",(e)=>{
  if(e.target.tagName="BUTTON"){
    let btn=e.target;
    if (btn.classList.contains("delete-btn")){
      let parent=btn.parentNode;
      parent.remove();
    }
  }
})



// Get parent of any card-title using .parentNode
// Log all children of .container using .children
// Get first and last child of container
// Log next sibling of card1
// Log previous element sibling of card3
// Use .closest() from a delete button to find the card it's in


let cardTitles=document.querySelectorAll(".card-title");
let card3Title=cardTitles[2];
console.log(card3Title.parentNode)

console.log(container.children) // only elements
console.log(container.childNodes)  // all nodes

console.log(container.firstChild)
console.log(container.firstChild.nextElementSibling)
console.log(container.lastChild)
console.log(container.lastChild.previousElementSibling)


document.querySelector(".hi").outerHTML="<h1>hehe</>" // all inclding th e selected element
document.querySelector(".hi").innerHTML="<h1>hehe</>" // only inner html