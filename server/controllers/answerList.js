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
        if(err) {
            return console.error(err);
        }
        else {
            
           res.json({success: true, msg: 'Survey List Displayed Successfully', answerList: answerList});
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

