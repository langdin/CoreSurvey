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
    endDate: Date
},
{
    collection: "surveys"
});

module.exports = mongoose.model('survey', surveySchema);