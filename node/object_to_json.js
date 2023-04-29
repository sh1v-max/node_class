// const details=
// {
//     name:"shiv",
//     section:"kmo33",
// }
// console.log(details.name)

// //converting object to json
// const jsondata=JSON.stringify(details)
// console.log(jsondata)

// //json to object
// const objdata=JSON.parse(jsondata)
// console.log(objdata)

//create an object convert to json and save to a file from that file
//read content and convert back to object ahd display.
 const fs = require("fs");
 const myobj = {
   nam: "shiv",
   section: "km033",
 };
 //coverting obj to json
 const jsondata = JSON.stringify(myobj);
 fs.writeFile("json1.json", jsondata, (err) => {
   console.log("done");
 });
 fs.readFile("json1.json", "utf-8", (err, data) => {
   const out = JSON.parse(data);
   console.log(data);
   console.log(out);
 });