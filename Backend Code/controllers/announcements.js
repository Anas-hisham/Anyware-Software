const Announcement = require('../models/Announcement');
const { httpStatusText } = require('../config/constants');

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find({}, { __v: 0 });
        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: { announcements } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const getAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.announcementId);
        if (!announcement) {
            return res.status(404).json({ 
                status: httpStatusText.FAIL, 
                message: 'Announcement not found' 
            });
        }

        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: { announcement } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const createAnnouncement = async (req, res) => {
    try {
        const newAnnouncement = new Announcement(req.body);
        await newAnnouncement.save();
        res.status(201).json({ 
            status: httpStatusText.SUCCESS, 
            data: { announcement: newAnnouncement } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const updateAnnouncement = async (req, res) => {
    try {
        const updatedAnnouncement = await Announcement.findByIdAndUpdate(
            req.params.announcementId,
            req.body,
            { new: true }
        );
        
        if (!updatedAnnouncement) {
            return res.status(404).json({ 
                status: httpStatusText.FAIL, 
                message: 'Announcement not found' 
            });
        }

        res.json({ 
            status: httpStatusText.SUCCESS, 
            data: { announcement: updatedAnnouncement } 
        });
    } catch (err) {
        res.status(500).json({ 
            status: httpStatusText.ERROR, 
            message: err.message 
        });
    }
};

const deleteAnnouncement = async (req, res) => {
    try {
        const deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.announcementId);
        
        if (!deletedAnnouncement) {
            return res.status(404).json({ 
                status: httpStatusText.FAIL, 
                message: 'Announcement not found' 
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
    getAllAnnouncements,
    getAnnouncement,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
};