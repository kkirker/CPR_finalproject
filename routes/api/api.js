var express = require("express");

var router = express.Router();

let app = express();

// Require all models
var db = require("../../models");


    // GET //

    //To pull a user


    //To pull the test

    //To pull the specific question in a test

    // POST //

    //To create new user 
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

    //To update a users score / test

    // module.exports = router;

