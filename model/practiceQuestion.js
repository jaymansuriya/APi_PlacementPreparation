const mongoose = require("mongoose");

const practiceQuestionSchema = new mongoose.Schema(
  {
    course_id: Number,
    chapter_id: Number,
    question_id: Number,
    question: String,
    options: Array,
    // o1:String,
    // o2:String,
    // o3:String,
    // o4:String,
    answer_index: Number,
    solution_image_url: String,
  },
  { collection: "practice_questions" }
);

module.exports = mongoose.model("practiceQuestion", practiceQuestionSchema);
