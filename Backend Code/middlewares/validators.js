const { body, validationResult } = require('express-validator');

exports.validateAnnouncement = [
    body('title').notEmpty().withMessage("title is required"),
    body('author').notEmpty().withMessage("author is required"),
    body('content').notEmpty().withMessage("content is required"),
    body('course').notEmpty().withMessage("course is required")
];

exports.validateQuiz = [
    body('title').notEmpty().withMessage("title is required"),
    body('course').notEmpty().withMessage("course is required"),
    body('topic').notEmpty().withMessage("topic is required"),
    body('dueDate').notEmpty().withMessage("dueDate is required")
];

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            status: 'fail', 
            message: errors.array() 
        });
    }
    next();
};