const Course = require("../model/Course");

// Get All course
const course_all = async (req, res) => {
  
    try {
        const courses = await Course.find();
        res.json(courses);
      } catch (error) {
        console.log(error)
        res.json({ message: error });
      }
};



module.exports = {
    course_all, 
  }