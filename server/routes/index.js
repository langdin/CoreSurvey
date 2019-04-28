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

let passport = require('passport');

let indexController = require('../controllers/index');

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


/* GET - display userdata */
router.get('/user/:id',passport.authenticate('jwt', {session: false}), indexController.getUser);

/* POST - update userdata */
router.post('/user/edit/:id',passport.authenticate('jwt', {session: false}), indexController.editUser);

module.exports = router;
