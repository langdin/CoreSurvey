/* 
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514 
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759 
Hyojin Kim - 300950009
 */

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// define the User Model
let surveyModel = require("../models/survey");
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server error?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      return res.json({ success: false, msg: "ERROR: Failed to Log In User!" });
    }
    req.logIn(user, err => {
      // server error?
      if (err) {
        return next(err);
      }

      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email
      };

      const authToken = jwt.sign(payload, DB.secret, {
        expiresIn: 604800 // 1 Week
      });

      return res.json({
        success: true,
        msg: "User Logged in Successfully!",
        user: {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email
        },
        token: authToken
      });
    });
  })(req, res, next);
};

module.exports.processRegisterPage = (req, res, next) => {
  // define a new user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, err => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.log("Error: User Already Exists!");
      }
      return res.json({
        success: false,
        msg: "ERROR: Failed to Register User!"
      });
    } else {
      // if no error exists, then registration is successful

      // redirect the user
      return res.json({ success: true, msg: "User Registered Successfully!" });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({ success: true, msg: "User Successfully Logged out!" });
};

module.exports.displayAllSurveyList = (req, res, next) => {
  surveyModel.find((err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({
        success: true,
        msg: "Survey List Displayed Successfully",
        surveyList: surveyList,
        user: req.user
      });
    }
  });
};

module.exports.editUser = (req, res, next) => {
  let id = req.params.id;
  let updatedUser = User({
    _id: id,
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.update({ _id: id }, updatedUser, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited User",
        user: updatedUser
      });
    }
  });
};

module.exports.getUser = (req, res, next) => {
  let id = req.params.id;

  User.findById(id, (err, userObj) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited User",
        user: userObj
      });
    }
  });
};
