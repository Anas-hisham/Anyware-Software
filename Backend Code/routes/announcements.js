const express = require('express');
const router = express.Router();
const {
    getAllAnnouncements,
    getAnnouncement,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
} = require('../controllers/announcements');
const { validateAnnouncement, validate } = require('../middlewares/validators');

router.get('/', getAllAnnouncements);
router.post('/', validateAnnouncement, validate, createAnnouncement);
router.get('/:announcementId', getAnnouncement);
router.patch('/:announcementId', updateAnnouncement);
router.delete('/:announcementId', deleteAnnouncement);

module.exports = router;