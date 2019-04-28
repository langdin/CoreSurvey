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
let answerSchema = mongoose.Schema({
    surveyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Survey'},
    answer1: {type: String, required: true},
    answer2: {type: String, required: true},
    answer3: {type: String, required: true},
    answer4: {type: String, required: true},
    answer5: {type: String, required: true}
},
{
    collection: "answers"
});

module.exports = mongoose.model('Answer', answerSchema);