const express = require('express');
const router = express.Router();
const { analyzeSentiment } = require('../controllers/sentimentController');

router.post('/', analyzeSentiment);

module.exports = router;
