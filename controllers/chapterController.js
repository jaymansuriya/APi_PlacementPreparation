const Chapter = require("../model/Chapter");

// Get All course
const chapter_all = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.json(chapters);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

//by course id
const chapters_by_id = async (req, res) => {
  try {
    const chapters = await Chapter.find({
      course_id: Number(req.params.course_id),
    });
    console.log(req.params.course_id);

    res.json(chapters);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  chapter_all,
  chapters_by_id,
};
