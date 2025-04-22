🥚 USDA Market News API Integration
This is a simple Node.js + Express project that pulls live agricultural data from the USDA Market News API — showing just how much useful information is available from public government APIs when you know how to look.

📌 What Is This?
This project is a basic API integration, meaning it connects to an external API (in this case, the USDA Market News API) to fetch, parse, and return relevant data to users. It sets up a local Express server to act as a middle layer between the USDA and your frontend or testing environment.

📬 What You'll Need
🔐 API Key
To access the USDA Market News API, you'll need an API key.

Sign up for free here: [USDA Developer Hub](https://mymarketnews.ams.usda.gov/)

Once signed up, you’ll receive a key via email.

📚 API Documentation
Full docs for the USDA Market News API:
👉 [https://usda.github.io/data-api-site](https://mymarketnews.ams.usda.gov/mars-api/getting-started/basic-instructions)

You'll want to familiarize yourself with:

The base URL: https://mymarketnewsapi.ams.usda.gov/api/v1

The endpoints, such as:

/reports

/report-categories

/markets

The query parameters (?limit=10, ?filter=..., etc.)

💡 What Does This API Do?
The USDA Market News API provides real-time reports on agricultural markets, including:

Commodity prices (eggs, beef, grain, etc.)

Market locations

Time-stamped, standardized reports

This data can be used to:

Track commodity prices

Analyze market trends

Build dashboards for farmers, economists, or supply chain analysts

🔧 Tech Stack
This project uses:

Node.js – JavaScript runtime

Express.js – Web server framework

CORS – Middleware to allow API requests from different origins

Axios – (or fetch) to make external API requests

dotenv – To manage API keys and secrets

🧩 What to Expect in This Project
When you run this project:

A local Express server will spin up.

It will route API calls through http://localhost:5000/api/usda

It fetches real USDA data and returns it in a clean JSON format.

This is useful if you're learning:

How to call external APIs in a backend

How to mount routers (app.use('/api', router))

How to work with .env and keep your API keys safe

🚀 Getting Started
Clone the repo:
[git clone https://github.com/yourusername/usda-api-integration](https://github.com/LaNegraDeCoda/shellEgg-1427.git)
cd usda-api-integration

Install dependencies:
npm install

Create a .env file:
touch .env

Inside .env, add your API key:
USDA_API_KEY=your_api_key_here

Start the server:
node index.js (this should reflect the name of your actual file; i.e. my file is server.js)

Visit:
http://localhost:5000/api/usda
🔄 Example Response
json
{
  "report_title": "Egg Market - California",
  "commodity": "Shell Eggs",
  "price_range": "2.50 - 3.00",
  "timestamp": "2024-04-15T12:00:00Z"
}
✨ Why This Matters
This project is a reminder that public APIs are powerful. Government APIs, especially, are often underused — but they can unlock incredible insights when connected with modern developer tools.

📎 License
MIT – use freely and build something cool.


# shellEgg-1427
USDA Eggs, Des Moines IA
