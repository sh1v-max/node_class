const express=require('express')
const app=express()
const path=require('path')
const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath))
app.get("/",(req,res)=>{
    res.send("<h1>welcome</h1>")
})
app.listen(2000)