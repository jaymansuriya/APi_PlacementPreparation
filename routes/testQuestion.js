const router = require("express").Router();
const testQuestionController = require('../controllers/testQuestionController');


router.get("/", testQuestionController.question_all);
router.get("/questionsByDifficulty/:difficulty", testQuestionController.questionsByDifficulty);



module.exports = router;