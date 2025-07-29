const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;
const API_KEY = process.env.ALPHAVANTAGE_KEY || 'demo';

// Health check
app.get('/', (req, res) => {
  res.send('🟢 Stock-Tracker API is up!');
});

// Stock price endpoint
app.get('/api/stock/:ticker', async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();

  const url = ticker === 'DEMO'
    ? `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`
    : `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const quote = response.data['Global Quote'] || {};
    const price = parseFloat(quote['05. price']) || null;

    return res.json({
      ticker,
      price,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Fetch error:', err.message);
    return res.status(502).json({ error: 'Stock API fetch failed' });
  }
});

// Export app for testing
module.exports = app;

// Start server only if run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
  });
}