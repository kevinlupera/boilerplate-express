require('dotenv').config()
let express = require("express");
console.log("Hello World");
let app = express();

app.get("/", getString);
app.get("/json", getJson);
// function getString(req, res) {
//   res.send("Hello Express");
// }

function getString(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

function getJson(req, res) {
  let message = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
}
app.use("/public", express.static("public"));

module.exports = app;
