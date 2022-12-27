const mongoose = require("mongoose");


const testQuestionSchema = new mongoose.Schema(
  {
    difficulty: String,
    question_id: Number,
    question: String,
    options: Array,
    answer_index: Number,
  },
  { collection: "test_questions" }
);



module.exports = mongoose.model("testQuestion", testQuestionSchema);
