/* 
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514 
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759 
Hyojin Kim - 300950009
 */

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let passport = require('passport');

let takeSurveyController = require('../controllers/take-survey');

/* POST route for precessing Add Answer */
router.post('/add', takeSurveyController.answerQuestions);
//router.get('/:id' ,takeSurveyController.displaySurveyQuestions);
//router.

module.exports = router;
