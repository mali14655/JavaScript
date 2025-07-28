import express, { json } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import multer from 'multer'


dotenv.config();
const app=express();
const port=process.env.PORT || 5000;
const upload=multer();  // for  multipart/form-data

app.use(cors());
app.use(express.json()); // for json data
app.use(express.urlencoded({extended:true})); // for application/x-www-form-urlencoded data



app.get("/",(req,res)=>{
    res.send("Hello from backend")
})

// app.get("/api/get",(req,res)=>{
//     const data={
//         name:"ali",
//         batch:"25"
//     }
//     console.log(req.headers)
//     if(req.accepts("application/json")){
//         res.status(200).send(data)

//     }else if(req.accepts("text/plain")){
//         res.status(200).type('text/plain').send("hello")
//     }
// })

// app.post("/api/send",upload.none(),(req,res)=>{
//     let data=(req.body)
//     console.log(data)
//     // res.status(300).send({message:"check"})
// })


// proper for fetch api get request

app.get("/api/get/users",(req,res)=>{
    let name=req.query.name; // receiving the query here
    res.status(200).send({name,message:"Succesfullly received"})
    // console.log("Request received")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
