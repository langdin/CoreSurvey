let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let surveyModel = require('../models/survey');
let userModel = require('../models/user');
let answerModel = require('../models/answer');

module.exports.answerQuestions = (req, res, next) => {

    let newAnswer = answerModel({
        "surveyId":req.body.surveyId,
        "answer1": req.body.question1,
        "answer2": req.body.question2,
        "answer3": req.body.question3,
        "answer4": req.body.question4,
        "answer5": req.body.question5
    });

    surveyModel.create(newAnswer, (err, answerModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    });
}