require("dotenv").config();
const bodyParser = require("body-parser");
let express = require("express");
console.log("Hello World");
let app = express();

app.use(middlewareLog);
app.use(bodyParser.urlencoded({ extended: false }));

function middlewareLog(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}

function middlewareTime() {
  const date = new Date().toString();
  console.log(date);
  return date;
}

app.get("/", getString);
app.get("/json", getJson);
// app.get('/now', getNow);

// function getString(req, res) {
//   res.send("Hello Express");
// }

function getString(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

function getJson(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  } else {
    message = "Hello json";
  }
  res.json({ message });
}

function getNow(req, res) {
  res.json({ time: req.time });
}
app.get(
  "/now",
  function (req, res, next) {
    req.time = middlewareTime(); // Hypothetical synchronous operation
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
});

function getName(req, res) {
  res.json({ name: `${req.query.first} ${req.query.last}` });
}

function sendName(req, res) {
  res.json({ name: `${req.body.first} ${req.body.last}` });
}

app.route("/name").get(getName).post(sendName);

app.use("/public", express.static("public"));

module.exports = app;
