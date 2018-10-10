const router = require("express").Router();
const db = require("../models");


//***********************************//
//----------- USER ROUTES -----------//
//***********************************//


//----------- CREATE NEW USER -----------//
router.post("/user", (req, res) => {
    db.User
    .create(req.body)
    .then(newUser => res.send(newUser))
    .catch(err => res.json(err));
})

//----------- UPDATE USER ------------//
//Use the FireBase user ID that is available throughout the app of the logged in user to find the user and update them
router.put("/user/:fbUserID", function(req, res) {
    db.User
    .findOneAndUpdate({ fbUserID: req.params.fbUserID }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));
})

//----------- GET A USER -------------//
router.get("/user/:fbUserID", (req, res) => {
    db.User.findOne({ fbUserID: req.params.fbUserID })
    .then(user => res.json(user))
    .catch(err => res.json(err));
})

//----------- CREATE TEST ------------//
//Call this first, then create the individual questions. They will get automatically added to the test's array of questions. 
router.post("/test/", (req, res) => {
    db.Test
    .create(req.body)
    .then(newTest => res.send(newTest))
    .catch(err => res.json(err))
})

//----------- GET TEST  / GET ALL QUESTIONS ---------------//
//This route should also return all the associated questions with the test 
router.get("/test/:version", (req, res) => {
    db.Test.findOne({version: req.params.version})
    .populate("Question")
    .then( test => res.send(test))
    .catch(err => res.json(err))
})

//----------- CREATE QUESTION -----------//
//Create a question associated with a specific test, do this for each question and the test will automatically update its array of questions
router.post("question/:testID", (req, res) => {
    db.Question
    .create(req.body)
    //Add the question to the Test's questions array 
    .then(question => {
        return db.Test
            .findOneAndUpdate(
                { _id: req.params.testID }, 
                { $push: { questions: question} }, 
                { new: true }
            );    
        })
    .then(updatedTest => res.json(updatedTest))
    .catch(err => res.json(err))
})

//----------- GET QUESTION -----------//
router.get("/question/:id", (req, res) => {
    db.Question
    .findOne({_id: req.params.id})
    .then(dbQuestion => res.json(dbQuestion))
    .catch(err => res.json(err))

})

module.exports = router;

