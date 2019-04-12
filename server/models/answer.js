let mongoose = require('mongoose');

// create a model class
let answerSchema = mongoose.Schema({
    createdDate: Date,
    surveyid: String,
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