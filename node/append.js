const fs = require("fs");
fs.appendFile("test.txt", " new content to be added",  //text to be added in file(test) created in asynch.js module
() => {
  console.log("done");
});
