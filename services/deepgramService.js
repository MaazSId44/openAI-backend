const { createClient, LiveTranscriptionEvents } = require("@deepgram/sdk");

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

module.exports = {
  deepgram,
  LiveTranscriptionEvents
};