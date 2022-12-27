const router = require("express").Router();
const chapterController = require('../controllers/chapterController');


router.get("/", chapterController.chapter_all);
router.get("/chaptersByCourseID/:course_id", chapterController.chapters_by_id);


module.exports = router;