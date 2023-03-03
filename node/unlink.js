//same as rmoving file instead of using rmFile we can also use unlink

const fs = require("fs");
fs.unlink("test.txt", function (err) {
  if (err) return console.log("file is missing");
  console.log("deleted");
});
