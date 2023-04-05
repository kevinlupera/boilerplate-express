let express = require("express");
console.log("Hello World");
let app = express();

app.get("/", getString);

// function getString(req, res) {
//   res.send("Hello Express");
// }

function getString(req, res) {
const absolutePath = __dirname + '/views/index.html'
  console.log("🚀 ~ file: myApp.js:13 ~ getString ~ absolutePath:", absolutePath)
  res.sendFile(absolutePath);
}

module.exports = app;
