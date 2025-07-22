const express = require('express');
const router = express.Router();
const {
    getAllQuizzes,
    getQuiz,
    createQuiz,
    updateQuiz,
    deleteQuiz
} = require('../controllers/quizzes');
const { validateQuiz, validate } = require('../middlewares/validators');

router.get('/', getAllQuizzes);
router.post('/', validateQuiz, validate, createQuiz);
router.get('/:quizId', getQuiz);
router.patch('/:quizId', updateQuiz);
router.delete('/:quizId', deleteQuiz);

module.exports = router;