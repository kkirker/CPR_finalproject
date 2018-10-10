const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();
var db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cpr_final_project";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


//API routes

// Import routes and give the server access to them.
// let routes = require("./routes/api/api.js");
// app.use(routes);
// Above file not being used, couldn't get it to hook up correctly 

app.post("/user/new", function(req, res){
  db.User.create(req.body)
  .then(function(newUser){
      res.send(newUser);
  })
  .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
  });
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
