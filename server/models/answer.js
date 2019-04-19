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
    createdDate: Date,
    surveyId: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String
},
{
    collection: "answers"
});

module.exports = mongoose.model('answer', answerSchema);