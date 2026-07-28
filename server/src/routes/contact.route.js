const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contact.controller');

// POST request to /api/contact/
// This routes the incoming form data to the controller function
router.post('/', submitContactForm);

module.exports = router;