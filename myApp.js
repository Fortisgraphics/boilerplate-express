const bGround = require("fcc-express-bground");
let express = require("express");
let app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {
  const string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello Express");
});

/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello Express");
});

/** 3) Serve an HTML file */
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

/** 4) Serve static assets  */

const absolutePath = __dirname + "/views/index.html";
const absolutePath2 = __dirname + "/public";

// Normal usage
app.use(express.static(absolutePath2));

// Assets at the /public route
app.use("/public", express.static(absolutePath2));

/** 5) serve JSON on a specific route */
// app.get("/json", (req, res) => {
//   res.json({ message: "Hello json" });
// });

/** 6) Use the .env file to configure the app */
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware to. A Time server */
app.get(
  "/now",
  (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    // accessing the newly added property
    // in the main function
    res.send({
      time: req.time,
    });
  },
);

/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get("/name", (req, res) => {
  const { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({ name: `${firstName} ${lastName}` });
});

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/* 12) Get data form POST  */
app.post("/name", (req, res) => {
  const { first: firstName, last: lastName } = req.body;
  res.json({ name: `${firstName} ${lastName}` });
});

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;

module.exports = app;
module.exports = app;
module.exports = app;
