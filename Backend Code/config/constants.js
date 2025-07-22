require('dotenv').config();

const httpStatusText = {
    SUCCESS: 'success',
    FAIL: 'fail',
    ERROR: 'error'
};

module.exports = {
    httpStatusText,
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
};