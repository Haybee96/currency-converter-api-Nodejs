const express = require('express');

// Import file module
const exchangeController = require('./../controllers/exchangeController');

// Start express route
const router = express.Router();

// Get all rates
router.get('/rates', exchangeController.getRates);

module.exports = router;