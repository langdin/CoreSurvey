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

let surveyController = require('../controllers/survey');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Survey List page - READ Operation */
router.get('/', surveyController.displayAllSurveyList);

/* GET Survey List page - READ Operation */
router.get('/:id', passport.authenticate('jwt', {session: false}), surveyController.displayUserSurveyList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), surveyController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}), surveyController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', surveyController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), surveyController.performDelete);

module.exports = router;