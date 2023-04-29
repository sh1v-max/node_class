// install cookie using <<npm install cookie-parser

const express=require('express')
const cookieparser=require('cookie-parser')
const app=express()
app.use(cookieparser())    //using <<app.use>> as a middleware (to initialize)
app.get("/", function(req,res)
{
    res.cookie("cookie1", "shiv").send('cookie is set')    //name of the cookie and value of the cookie
})
app.get("/show",function(req,res,next)
{
    res.send(req.cookies)  //dont forget to use cookies with "s"
})
app.get("/delete",function(req,res)
{
    res.clearCookie('int222').send('cookie deleted')
})
app.listen(3003)