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
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    description: {type: String, required: true},
    question1: {type: String, required: true},
    question2: {type: String, required: true},
    question3: {type: String, required: true},
    question4: {type: String, required: true},
    question5: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    surveyId: {type: String, required: true},
    payment: {type: String, required: true}

},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveySchema);