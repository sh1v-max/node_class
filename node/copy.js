const fs = require("fs");
fs.copyFile("test.txt", "copy.txt", function(err){
    if(err) 
    return console.log("file is missing")
  console.log("data copied");
})


