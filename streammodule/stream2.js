const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("test1.txt");
  rstream.pipe(res)
});
server.listen(8000, "127.0.0.1");
