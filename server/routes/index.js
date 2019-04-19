let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);

/* GET - display all survey list*/
router.get('/survey', indexController.displayAllSurveyList);

/* GET - display userdata*/
router.post('/edit/:id', indexController.editUser);

module.exports = router;
