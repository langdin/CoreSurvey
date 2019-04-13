let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let passport = require('passport');

let takeSurveyController = require('../controllers/take-survey');


router.post('/add', takeSurveyController.answerQuestions);
//router.get('/:id' ,takeSurveyController.displaySurveyQuestions);
//router.

module.exports = router;
