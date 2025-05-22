const express = require('express');
const router = express.Router();

const { generateResponse } = require('../controllers/openaiController');
const { openaiValidationRules } = require('../middlewares/validations');

router.post('/generate', openaiValidationRules, generateResponse);

module.exports = router;
