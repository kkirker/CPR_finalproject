const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  version: { type: String, required: true },
  questions: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Question"
    }
  ]

});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
