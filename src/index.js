const path = require("path");
const express = require("express");
const handelbars = require("express-handlebars");
const app = express();
const port = 3000;

// Template engine
app.engine(
  "hbs",
  handelbars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

// path.join(__dirname tra ve duong dan hien tai cua file index nay
app.set("views", path.join(__dirname, "resources/views"));

// route
app.get("/", (req, res) => {
  // tra ve trinh duyet 1 chuoi hello word!
  res.render("home");
});

app.get("/test", (req, res) => {
  res.send({ id: 1 });
});

// listen app tren port 3000 với mac dinh la localhost - 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
