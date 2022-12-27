const PracticeQuestion = require("../model/PracticeQuestion");

// Get All que
const question_all = async (req, res) => {
  try {
    const questions = await PracticeQuestion.find().select({
      o1: 0,
      o2: 0,
      o3: 0,
      o4: 0,
    });
    // console.log(res)
    res.json(questions);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

// Get que by course and chapter
// const questionByCourseAndChapter = async (req, res) => {
//   try {
//     const questions = await PracticeQuestion.find({
//       course_id: req.params.course_id,
//     }).select({ o1: 0, o2: 0, o3: 0, o4: 0 });
//     console.log(req.params.course_id);
//     res.json(questions);
//   } catch (error) {
//     console.log(error);
//     res.json({ message: error });
//   }
// };

//by course id
const questionByCourseAndChapter = async (req, res) => {
  try {
    const questions = await PracticeQuestion.aggregate([
      {
        $match: {
          course_id: req.params.course_id,
          chapter_id: req.params.chapter_id,
        },
      },

      { $project: { o1: 0, o2: 0, o3: 0, o4: 0 } }
    ]);
    console.log(req.params);
    res.json(questions);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

module.exports = {
  question_all,
  questionByCourseAndChapter,
};
