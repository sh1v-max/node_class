const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/" method="post">
          <label for="num1">Num 1:</label>
          <input type="number" id="num1" name="num1"><br>
          <label for="num2">Num 2:</label>
          <input type="number" id="num2" name="num2"><br>
          <button type="submit" name="action" value="sum">Sum</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/', (req, res) => {
  const { num1, num2, action } = req.body;
  if (action === 'sum') {
    const sum = Number(num1) + Number(num2);
    res.send(`The sum is ${sum}`);
  }
});

app.listen(3000);
