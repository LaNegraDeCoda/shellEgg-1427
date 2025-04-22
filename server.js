import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';  // Import fetch

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Set up environment variables
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

console.log('🔐 API_URL:', API_URL);
console.log('🔐 API_KEY:', API_KEY);

// Middleware setup
app.use(cors());
app.use(express.json());

// API route handling
const router = express.Router();

router.get('/reports', (req, res) => {
  const baseURL = 'https://marsapi.ams.usda.gov/services/v1.2/reports/1427';  
  const finalURL = `${baseURL}`;
  const encodedKey = Buffer.from(`${API_KEY}:`).toString('base64');

  console.log('📡 Final API URL:', finalURL);
  console.log('🔑 Encoded API Key:', encodedKey);

  fetch(finalURL, {
    headers: {
      'Authorization': `Basic ${encodedKey}`,
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })

  .then(data => {
    // NEW: Enhanced logging - both formats for maximum debugging
    console.log('📊 JSON.stringify output:');
    console.log(JSON.stringify(data, null, 2));
    
    console.log('\n📊 console.dir output (colorized):');
    console.dir(data, { depth: null, colors: true });
    
    // NEW: Log the first item's structure for query planning
    if (Array.isArray(data)) {
  if (data.length > 0) {
    console.log('\n🔍 First report structure:');
    console.log(Object.keys(data[0]));
  }
} else if (typeof data === 'object') {
  console.log('\n🔍 Report structure (object):');
  console.log(Object.keys(data));
}
console.log('📦 Data type:', Array.isArray(data) ? 'Array' : typeof data);

    
    res.json({ success: true, data });
  })

  .catch(err => {
    console.error('❌ Error:', err.message);
    console.error('Stack:', err.stack); // NEW: Added stack trace
    res.status(500).json({ 
      success: false, 
      error: err.message,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  });
});
// Mount the router to handle '/api' requests
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// This tells Express to serve any static files (like index.html, style.css, or any .js you reference) from the same folder as server.js.
app.use(express.static('.'));
