require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();
const { PORT } = require('./config/constants');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Database connection and server start
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Failed to start server:", err);
        process.exit(1);
    });