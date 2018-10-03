const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  name: { type: String, required: true },
  optionA: {type: String},
  optionB: {type: String},
  optionC: {type: String},
  optionD: {type: String},
  answer: {type: String},

});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
