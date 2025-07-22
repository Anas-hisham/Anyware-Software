const Quiz = require('../models/Quiz');
const { httpStatusText } = require('../config/constants');

const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({}, { __v: 0 });
        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: { quizzes } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.quizId);
        if (!quiz) {
            return res.status(404).json({ 
                status: httpStatusText.FAIL, 
                message: 'Quiz not found' 
            });
        }

        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: { quiz } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const createQuiz = async (req, res) => {
    try {
        const newQuiz = new Quiz(req.body);
        await newQuiz.save();
        res.status(201).json({ 
            status: httpStatusText.SUCCESS, 
            data: { quiz: newQuiz } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const updateQuiz = async (req, res) => {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            req.params.quizId,
            req.body,
            { new: true }
        );
        
        if (!updatedQuiz) {
            return res.status(404).json({ 
                status: httpStatusText.FAIL, 
                message: 'Quiz not found' 
            });
        }

        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: { quiz: updatedQuiz } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const deleteQuiz = async (req, res) => {
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(req.params.quizId);
        
        if (!deletedQuiz) {
            return res.status(404).json({ 
                status: httpStatusText.FAIL, 
                message: 'Quiz not found' 
            });
        }

        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: null 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

module.exports = {
    getAllQuizzes,
    getQuiz,
    createQuiz,
    updateQuiz,
    deleteQuiz
};