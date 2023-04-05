let express = require("express");
console.log("Hello World");
let app = express();

app.get("/", getString);

function getString(req, res) {
  res.send("Response String");
}

module.exports = app;
