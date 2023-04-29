//form with button
    // const express = require("express");
    // const app = express();
    // const bodyparser = require("body-parser");
    // app.use(bodyparser.urlencoded({ extended: false })); //to utilise this module
    // app.get("/", (req, res, next) => {
    //   //to get content inside the module
    //   res.send(
    //     "<form method='post' action='/saveform'><input type='text' placeholder='name' required /><input type='text' placeholder='email' required /><button type='submit'>save</button></form>"
    //   ); //discribe my form with buttons
    // });
    // app.post("/saveform", (req, res, next) => {
    //   res.send(req.body);
    // });
    // app.listen(8080); //loading and writing to the new host and loading to the port.


    

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extented: false }));
app.get("/", (req, res, next) => {
  res.send(
    "<form method='post' action='/saveform'><input type='text' name='name' required /><input type='text' name='email' placeholder='email' required /><button type='submit'>save</button></form>"
  );
});
app.post("/saveform", (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(2001);

//input the name and email and it will fetch a js file
//output on console<< { name: 'singh shiv', email: 'singhshiv0427@gmail.com' }
