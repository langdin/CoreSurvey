/* 
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514 
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759 
Hyojin Kim - 300950009
 */

let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    userEmail: String,
    name: String,
    description: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    startDate: Date,
    endDate: Date,
    surveyId:String,
    status:String,
    payment:String

},
{
    collection: "surveys"
});

module.exports = mongoose.model('survey', surveySchema);