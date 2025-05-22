const axios = require('axios');
const asyncHandler = require('../middlewares/trycatch');
const { responseData, errorResponse } = require('../utilis/response');
const { validationResult } = require('express-validator');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

exports.generateResponse = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, errors.array()[0].msg, 400);
  }

  const { prompt } = req.body;

  try {
    const completion = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-7b-instruct', // ✅ Valid, free model
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost', // Required for some models
          'Content-Type': 'application/json',
        },
      }
    );

    const generatedText = completion.data.choices[0].message.content;

    return responseData(res, true, 200, { response: generatedText }, 'Generated response successfully');
  } catch (error) {
    console.error('OpenRouter API error:', error?.response?.data || error.message);
    return errorResponse(
      res,
      error?.response?.data?.error?.message || 'Failed to generate response from OpenRouter API',
      500
    );
  }
});
