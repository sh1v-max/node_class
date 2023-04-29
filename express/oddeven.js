//create a page with textbox and a button taking odd or even number form user
//and dispaly the number if its odd or even on different page 
//also create a file with resut saying << its odd/even number>>


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));

// serve the form
app.get("/", (req, res) => {
  res.send(`
<form method="POST" action="/save">
<input type="Number" name="Number" placeholder="23" required>

<button type="submit">Save</button>
</form>
`);
});

// log the form data to the console
app.post("/save", (req, res) => {
  const { Number } = req.body;
  console.log(`Form Number received: ${Number}`);
  if (Number % 2 == 0) {
    res.send(`Number Entered is Even: ${Number}`);
    fs.appendFile(
      "result.txt",
      `\nNumber Entered is Even: ${Number}`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  } else {
    res.send(`Number Entered is Odd: ${Number}`);
    fs.appendFile(
      "result.txt",
      `\nNumber Entered is odd: ${Number}`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  }
});

// start the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});