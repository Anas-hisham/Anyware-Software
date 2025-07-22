const mongoose = require('mongoose');
const { MONGO_URL } = require('./constants');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;