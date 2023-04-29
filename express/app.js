// const express=require("express")
// const app=express()
// app.get("/",(req,res)=>{
//     res.send("Welcome to express")
// })
// app.listen(8000,()=>{
//     console.log("listening to port")
// })

// get = Read
// post = create
// put = update 
// delete]

// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/", (req, res) => {
//   res.send("welcome to express");
// });
// app.get("/feedback", (req, res) => {
//   res.send("welcome to feedback");
// });
// app.get("/about", (req, res) => {
//   res.send("welcome to about page");
// });
// app.listen(port, () => {
//   console.log("listenong to port");
// });


//html and json content as response
const express=require('express')
const app=express()
const port=8000
app.get("/",(req,res)=>{
res.write("<h1>welcome to express</h1>")
res.write("<h1>html content</h1>")
res.send()//connection close
})
app.get("/about",(req,res)=>{
res.send({
id:1,
nam:"isha"
})})
app.listen(port,()=>{
console.log(`listening to ${port}`)
})

