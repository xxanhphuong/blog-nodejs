const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/news", (req, res) => {
  // tra ve trinh duyet 1 chuoi hello word!
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World!");
});

// listen app tren port 3000 với mac dinh la localhost - 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
