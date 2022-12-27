const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  

  course_id:Number,
  course_name:String,
  course_image:String,
  topics:Number

});

module.exports = mongoose.model("courses", courseSchema);