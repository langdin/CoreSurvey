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
let surveyModel = require('../models/survey');
let userModel = require('../models/user');
let answerModel=require('../models/answer');

module.exports.getAnswers = (req, res, next) =>{
    let id = req.params.id;



    answerModel.find((err, answerList) => {
        answerList = answerList.filter(a => a.surveyId == id);
        if(err) {
            return console.error(err);
        }
        else {
            
           res.json({success: true, msg: 'Answer List Displayed Successfully', answerList: answerList});
        }
    });
}



module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Survey'});
        }
    });
}

