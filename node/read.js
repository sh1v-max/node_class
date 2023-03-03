const fs = require("fs");
fs.readFile("test.txt", "utf-8", (err, data) =>
//err is just function name and "data" is variable to store data
//notice utf-8.. previously it was showing buffer value, using utf-8  we can directly get character
{
  console.log(data);
}
);
