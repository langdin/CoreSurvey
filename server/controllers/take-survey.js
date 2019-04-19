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

// create a reference to the db schema
let answerModel = require('../models/answer');

module.exports.answerQuestions = (req, res, next) => {

    let newAnswer = answerModel({
        "surveyId": req.body.surveyId,
        "answer1": req.body.answer1,
        "answer2": req.body.answer2,
        "answer3": req.body.answer3,
        "answer4": req.body.answer4,
        "answer5": req.body.answer5
    });

    answerModel.create(newAnswer, (err, answerModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    });
}