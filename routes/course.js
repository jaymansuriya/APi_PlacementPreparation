const router = require("express").Router();
const courseController = require('../controllers/courseController');


router.get("/", courseController.course_all);


module.exports = router;