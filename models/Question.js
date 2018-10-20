const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id: {type: String, required: true},
  question: { type: String, required: true },
  options: {
    "A": {type: String},
    "B": {type: String},
    "C": {type: String},
    "D": {type: String},
  },
  answer: {type: String},
 
 });

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
