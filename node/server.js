// learning to create a server
const http = require("http");
const url = require("url");
const fs=require("fs")
const server = http.createServer((req, res) => {
    server.on()
    console.log(req, url);
    if (req.url == "/") {
        res.end("response getting from home page");
    } 
    else if (req.url == "/contact") {
        res.end("response getting from contact page");
    } 
    else if (req.url == "/about") {
        res.end("response getting from about page");
    }  
    else {
        res.writeHead(404,{"Content-type":"text/html"}) //writehead method is used for manipulation or type of text or argument we are passing
        res.end("<h1>page not there<h1>");
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port 8000");
});
