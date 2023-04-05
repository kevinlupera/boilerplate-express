let express = require("express");
console.log("Hello World");
let app = express();

app.get("/", getString);

// function getString(req, res) {
//   res.send("Hello Express");
// }

function getString(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}
app.use("/public", express.static("public"));

module.exports = app;
