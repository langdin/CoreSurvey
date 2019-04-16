let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let passport = require('passport');

let answerListController = require('../controllers/answerList');


router.get('/get/:id', answerListController.getAnswers);
//router.get('/:id' ,takeSurveyController.displaySurveyQuestions);
//router.

module.exports = router;
