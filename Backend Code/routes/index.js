const express = require('express');
const router = express.Router();
const announcementsRouter = require('./announcements');
const quizzesRouter = require('./quizzes');

router.use('/announcements', announcementsRouter);
router.use('/quizzes', quizzesRouter);

// Not found route
router.all('*', (req, res) => {
    res.status(404).json({ 
        status: 'error', 
        message: 'This resource is not available' 
    });
});

module.exports = router;