const TestQuestion = require("../model/TestQuestion");
var random = require("mongoose-random");

// Get All que
const question_all = async (req, res) => {
  try {
    const questions = await TestQuestion.find().select({
      o1: 0,
      o2: 0,
      o3: 0,
      o4: 0,
    });
    res.json(questions);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

// get 30 que by difficulty

const questionsByDifficulty = async (req, res) => {
  try {
    const questions = await TestQuestion.aggregate([
      {
        $match: {
          difficulty: req.params.difficulty,
        },
      },
      { $sample: { size: 30 } },
      { $project: { o1: 0, o2: 0, o3: 0, o4: 0, answer_index :0, _id:0 } },
    ]);

    res.json(questions);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

module.exports = {
  question_all,
  questionsByDifficulty,
};
