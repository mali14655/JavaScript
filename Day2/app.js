

// console.log("Hello")
// console.log(Math)


// xyz


// console.log(Math.ceil((Math.random()*6)+1))


// console.log(Math.floor((Math.random()*900000)+100000))



let date = new Date();  // current date
// console.log(date)

let datefromString=new Date("2025-01-12"); // create a date of you own from string yyyy-mm-dd
// console.log(datefromString)

let dateFromParts=new Date(2023,2,25,5,12) // same as above
// console.log(dateFromParts.getTime());// get total millisecs from that date till now
let fixed=dateFromParts.getTime()

let today=Date.now() // millisec from 1970 1 jan 12:00 Am
// console.log(Math.floor(((((today-fixed)/1000)/60)/60)/24/30/12)) // conversion

// month is 0 indexed
// console.log(date.getMonth()+1);
// console.log(date.getDate());

// day is 0 indexed 0-sunday and so on
// console.log(date.getDay())

// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());


// Human readable

// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())


// customizing

// console.log(date.toLocaleString("ur-pk",{
//     weekday:"short",
//     day:"2-digit",
//     year:"numeric",
//     month:"long"
// }))

// console.log(date.toLocaleString("ur-pk",{
//     weekday:"short",
//     day:"2-digit",
//     year:"numeric",
//     month:"long"
// }))


// stop watch
// let millisec=0;
// let sec=0;
// let min=0;

// let stopwatch=()=>{
//     millisec++;
//     sec=Math.floor(millisec/1000)
//     min=Math.floor(sec/60);
//     let h1=document.querySelector("h1");
//     h1.innerHTML=`${min} : ${sec} :${millisec}`;
// }

// let time;
// let start=document.querySelector(".start");
// start.addEventListener('click',()=>{
//     time=setInterval(stopwatch,1);
    
// });


// let stop=document.querySelector(".stop");
// stop.addEventListener('click',()=>{
//     clearInterval(time)
// })

// let resett=document.querySelector(".reset");
// resett.addEventListener('click',()=>{
//     sec=0
//     let h1=document.querySelector('h1')
//     h1.innerHTML=sec;
// })



// arraya 

// let array=[1,2,3,4];
// console.log(array[1])
// console.log(array["1"])

// let newArray=array.slice();
// let newArray=Array.from(array);
// newArray.push("ali");
// newArray[4].xyz="asim"
// console.log(array)
// console.log(newArray)


// deep copy
// let newArray=structuredClone(array);
// newArray.push("ali");
// newArray[4].xyz="asim"
// console.log(newArray)
// console.log(array)
// or;

// let newArray=JSON.parse(JSON.stringify(array));
// newArray.push("ali");
// console.log(newArray)
// console.log(array)

// console.log(JSON.parse(JSON.stringify(array)))


// methods

// let array=["civic","lambhorgini",'TZ','V8'];

// array[10]="MarkX";
// array.forEach((item)=>{
//     console.log(item)
// })
// console.log(array[5])
// console.log(Object.keys(array))


// sparsing sparse->empty holes in array;

// let array=[1,2,3,4,5];
// array[10]=11;    
// console.log(array);

// let array=Array(5); // constructor function
// console.log(array)

// let array=[1,2,3];
// array.length=10; array elongation
// delete array[1] deleting an items create a sparse
// console.log(array)


// Array Methods

let array=[100,2,3,4,5,6,2,7];

// array.forEach((item,index,array)=>{
//     console.log(item)
// })

// let newArray=array.map((item)=>{
//     return item*2
// })
// console.log(newArray)

// let x=array.filter((item)=> item%2==0 ) 
// console.log(x)

// let sign=array.some((item)=>item>10)
// console.log(sign)
// let sign=array.every((item)=>item<10)
// console.log(sign)

// let value=array.reduce((acc,currentValue)=>{
//     if(acc[currentValue]){
//         acc[currentValue]+=1;
//     }
//     else{
//         acc[currentValue]=1
//     }
//     return acc;
// },{})

// console.log(value)

// first map then flat
// let newArray=array.flatMap((item)=>[item*2])
// console.log(newArray)


// searching methods

// console.log(array.find((item)=> item==2));
// console.log(array.findIndex((item)=> item==2));
// console.log(array.findLast((item)=> item==2));
// console.log(array.findLastIndex((item)=> item==2));
// console.log(array.includes(22))
// console.log(array.indexOf(2))
// console.log(array.lastIndexOf(2))


// modiying mehtods

// let myArray=[1,20,30,4];
// let myArray=[11,1100];

// let result=myArray.splice(0,3,"ali");
// let result=myArray.splice(4,0,"ali"); // add,
// let result=myArray.splice(4,1,"ali"); // replace,
// let result=myArray.splice(4,1); // delete,

// console.log(result)
// console.log(myArray.sort()) // first convert to string 

// console.log(myArray.sort((a,b)=>(a-b))) ; ascending a-b=-ve then a come before b, +ve then b come before a , and 0 then no change
// console.log(myArray.sort((a,b)=>(b-1))); descending
// console.log(array.reverse());

// console.log(array.fill("ali",0,4)) // fill with a static avlue with a range last index exclusive

// console.log(array.copyWithin(1,5)); // copy eleemnt from second given index to 1st given index within the array



// output and transformation

// let newArray=array.slice(1,4); // return a shallow copy of this part 
// let newArray1=array.slice(); // return a shallow copy of whole array 
// console.log(newArray)
// console.log(newArray1)
// console.log(array)

// join // create string from array elemnt using commas by default and you can give any other element

// console.log(array.join("-"))
// console.log(array.join()) // same as toString();
// console.log(array.join("_"))
// console.log(array.join(" "))
// console.log(array.join("A"))

// console.log()


// console.log(array.at(-1)) // last index
// console.log(array.with(2,"ali")); // return array with that indice updated

// console.log(array[Symbol.iterator]().next()); // iterator only for values
// console.log(array.entries().next()); // iterator for both values and indices
// console.log(array.keys().next()); // iterator for keys only/indices
// console.log(array.values().next()); // iterator for values only
// console.log(array[Symbol.iterator]().next());
// console.log(array[Symbol.iterator]().next());


// for of -> is for iterables only  and use values by default
// for(let value of array){
//     console.log(value)
// }

// for (let [index, value] of array.entries()) {
//   console.log(index,value);
// }
// for (let  value of array.values()) {
//   console.log(value);
// }
// for (let  key of array.keys()) {
//   console.log(key);
// }




// let object={
//     Name:"ali",
//     batch:25
// }

// for in can be use on iterables or non-iterables but it use indices or keys
// for(let val in object){
//     console.log(val)
// }
// for(let val in array){
//     console.log(val)
// }


// let result=array.toReversed();
// let result2=array.toSorted();
// let result3=array.toSorted((a,b)=>(a-b));
// let result4=array.toSorted((a,b)=>(b-1));
// console.log(result)
// console.log(result2)
// console.log(result3)
// console.log(result4)
// console.log(array)

// console.log(array.toSpliced(1,0,"ali"))
// console.log(array)

// console.log(Array.of(1,2,3,4))
// console.log(Array.from(2))