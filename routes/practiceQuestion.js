const router = require("express").Router();
const practiceQuestionController = require('../controllers/practiceQuestionController');


router.get("/", practiceQuestionController.question_all);
router.get("/questionByCourseID/:course_id/questionByChapterID/:chapter_id", practiceQuestionController.questionByCourseAndChapter);





module.exports = router;