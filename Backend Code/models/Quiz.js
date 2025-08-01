const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    content: String
});

module.exports = mongoose.model('Quiz', quizSchema, 'quizzes');