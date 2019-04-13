let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let surveyModel = require('../models/survey');
let userModel = require('../models/user');

module.exports.displaySurveyList = (req, res, next) =>{
    surveyModel.find((err, surveyList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Survey List Displayed Successfully', surveyList: surveyList, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newSurvey = surveyModel({
        "userEmail": req.body.userEmail,
        "name": req.body.name,
        "description": req.body.description,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5,
        "surveyId":req.body.surveyId,
    });

    surveyModel.create(newSurvey, (err, surveyModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    surveyModel.findById(id, (err, surveyObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Survey to Edit', survey: surveyObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedSurvey = surveyModel({
        "_id": id,
        "name": req.body.name,
        "description": req.body.description,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5
    });

    surveyModel.update({_id: id}, updatedSurvey, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Survey', survey: updatedSurvey});
        }
    })
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

