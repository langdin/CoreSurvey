let express = require('express');
let router = express.Router();

let passport = require('passport');

let indexController = require('../controllers/index');

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);

/* GET - display all survey list */
router.get('/survey', indexController.displayAllSurveyList);

/* GET - display userdata */
router.get('/user/:id',passport.authenticate('jwt', {session: false}), indexController.getUser);

/* POST - update userdata */
router.post('/user/edit/:id',passport.authenticate('jwt', {session: false}), indexController.editUser);

module.exports = router;
