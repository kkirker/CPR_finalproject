const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  name: { type: String, required: true },
  options: {
    1: {type: String},
    2: {type: String},
    3: {type: String},
    4: {type: String},
  },
  answer: {type: Number},

});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
