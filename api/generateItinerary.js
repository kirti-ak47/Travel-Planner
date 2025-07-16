// api/generateItinerary.js

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  try {
    const { origin, Destination, Start_date, End_date, Budget, Interests } = req.body;

    const prompt = `
      Plan a day-wise travel itinerary from ${origin} to ${Destination}
      from ${Start_date} to ${End_date} with a budget of ${Budget}.
      Interests include: ${Interests}.
      Include attractions, food, travel tips, and cost estimates.
    `;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ itinerary: text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
