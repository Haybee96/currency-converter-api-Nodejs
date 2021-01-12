const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const env = require('dotenv');

// Read the config file
env.config({ path: './config.env' });

// Replace DB dummy text with actual password
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Connect with database with mongoose
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected'));

// Start express app
const app = express();

// Body middleware
app.use(express.json());

// Use morgan in development mode.
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// App listen to server
const port = 8989 || process.env.PORT;
app.listen(port, () => console.log(`App started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));