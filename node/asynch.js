const fs=require('fs')
fs.writeFile("test.txt","this is asynch mod", ()=>{
    console.log("done")
})