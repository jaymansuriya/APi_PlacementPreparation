const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  
    course_id:Number,
    chapter_id:Number,
    chapter_name:String,
    chapter_image:String,
    material_url:String,
    video_url:String,
    video_duration:String

});



module.exports = mongoose.model("chapters", chapterSchema);