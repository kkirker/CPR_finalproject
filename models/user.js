const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fbUserID: {type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  // dateOfBirth: { type: Date, default: Date.now },
  // zipCode: { type: String, required: true },
  score: { type: Number, min: 0 },
  testVersion: { type: String },
  testAnswers: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;
