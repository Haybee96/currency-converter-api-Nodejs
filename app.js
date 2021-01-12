const express = require('express');
const morgan = require('morgan')
const env = require('dotenv');

const exchangeRoute = require('./routes/exchangeRoute');

// Read the config file
env.config({ path: './config.env' });

// Start express app
const app = express();

// Body middleware
app.use(express.json());

// Use morgan in development mode.
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Route middleware
app.use('/api', exchangeRoute);

// App listen to server
const port = 8989 || process.env.PORT;
app.listen(port, () => console.log(`App started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));