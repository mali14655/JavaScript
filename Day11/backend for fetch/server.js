import express, { json } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import multer from 'multer'
import path from "path"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);   // current file's absolute path
const __dirname = path.dirname(__filename);          // current directory

dotenv.config();
const app=express();
const port=process.env.PORT || 5000;
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, 'images'))
    },
    filename:function(req,file,cb){
        let extension=path.extname(file.originalname)
        cb(null,`aliImage${extension}`)
    }
});  // for  multipart/form-data - initialize multer 

const upload = multer({storage});

app.use(cors());
app.use(express.json()); // for json data
app.use(express.urlencoded({extended:true})); // for application/x-www-form-urlencoded data
// extended: true ➤ { user: { name: 'Ali' } } (nested object ) -> Allows deep parsing (nested objects/arrays
// false by default -> Parses only simple key-value pairs not nested objects nad arrays






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


// for JSON data-> here Json Data received is parsed by express.json() middleware
// //
app.post("/api/post/user",(req,res)=>{
    let {username,email} = req.body
    console.log(username,email)
    res.status(200).send({message:"Success"})
})

// posted from form direclty
// but here th response send will open a new page with that mesage so , it should be a proper page or handle it using js and dont send it directly from form.
app.post("/api/post/form",(req,res)=>{
    console.log(req.headers);
    console.log(req.body.username)
    res.status(200).send({message:"successfully received"})
})

// urlencoded-> parsed by urlencoded() middleware
app.post("/api/post/urlencoded",(req,res)=>{
    console.log(req.body)
        let {name,age}=req.body;
        console.log(name,age);
        res.status(200).send({message:"Success"})
})

// simple form data with no files
app.post("/api/post/simple-formdata",upload.none(),(req,res)=>{
    console.log(req.body)
    console.log(req.file) // undefined as no files found as we are using uplaod.none() so reject files also
    console.log(req.files)
    res.status(200).send({message:"success"})
})

// formdata with single file from single input
app.post("/api/post/singleFile-formdata",upload.single("userimage"),(req,res)=>{
console.log(req.file);
res.status(200).send({message:"success"})
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
