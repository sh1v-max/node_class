const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="post">
      <label for="key">Key:</label>
      <input type="text" name="key" id="key"><br>
      <label for="value">Value:</label>
      <input type="text" name="value" id="value"><br>
      <button type="submit" name="action" value="set">Set Cookie</button>
      <button type="submit" name="action" value="get">Get Cookie</button>
      <button type="submit" name="action" value="delete">Delete Cookie</button>
    </form>
  `);
});

app.post("/", (req, res) => {
  const { key, value, action } = req.body;
  if (action === "set") {
    res.cookie(key, value);
    res.send("Cookie has been set");
  } else if (action === "get") {
    const cookieValue = req.cookies[key];
    if (cookieValue) {
      res.send(`${key}  ${cookieValue}`);
    } else {
      res.send("{}");
    }
    
  } else if (action === "delete") {
    res.clearCookie(key);
    res.send("Cookie has been deleted");
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
