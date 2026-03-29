require('dotenv').config();


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Resolve the absolute path to the parent directory (FurstResponse folder)
const projectRoot = path.resolve(__dirname, '..');

// Serve all static files (index.html, script.js, style.css) from the project root
app.use(express.static(projectRoot));

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


let feedbacks = [];
let savedAdvice = [];

// Gemini API Proxy
app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", JSON.stringify(data, null, 2));
      return res.status(response.status).json({
        error: "Gemini API failed",
        details: data.error || data
      });
    }

    res.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Internal server error during chat" });
  }
});

app.get('/api/advice', (req, res) => {
  const expertAdvice = {
    all: [
      "Regular exercise is crucial for your dog's physical and mental health - aim for at least 30 minutes daily",
      "Mental stimulation through puzzle toys can prevent boredom and destructive behaviors",
      "Consistent training using positive reinforcement builds trust and good behavior",
      "Quality sleep is as important for dogs as it is for humans - ensure a comfortable sleeping area",
      "Regular veterinary check-ups can catch potential health issues early",
    ],
    physical: [
      "Brush your dog's teeth regularly to prevent dental disease",
      "Keep nails trimmed to avoid discomfort and mobility issues",
      "Regular grooming prevents matting and helps spot skin problems early",
      "Monitor your dog's weight - obesity leads to many health problems",
      "Provide fresh water at all times to maintain proper hydration",
    ],
    mental: [
      "Rotate toys weekly to keep your dog mentally engaged",
      "Teach new tricks to stimulate your dog's brain",
      "Provide safe chewing outlets to relieve stress and anxiety",
      "Maintain consistent routines to reduce canine anxiety",
      "Socialization with other dogs should be ongoing throughout their life",
    ],
    training: [
      "Use treats and praise immediately to reinforce good behavior",
      "Keep training sessions short (5-15 minutes) for best results",
      "Never punish after the fact - dogs live in the moment",
      "Teach 'leave it' and 'drop it' for safety and control",
      "Practice commands in different locations for better generalization",
    ],
    nutrition: [
      "Choose high-quality protein as the first ingredient in dog food",
      "Avoid foods toxic to dogs: chocolate, grapes, onions, and xylitol",
      "Measure meals to prevent overfeeding",
      "Introduce new foods gradually to avoid digestive upset",
      "Consult your vet before making significant diet changes",
    ],
  };
  res.json(expertAdvice);
});

app.post('/api/feedback', (req, res) => {
  const feedback = {
    id: Date.now(),
    ...req.body,
    timestamp: new Date().toISOString()
  };
  feedbacks.push(feedback);
  res.json({ message: 'Feedback saved successfully!', feedback });
});

app.get('/api/feedback', (req, res) => {
  res.json(feedbacks);
});

app.post('/api/advice/save', (req, res) => {
  const { advice } = req.body;
  if (advice && !savedAdvice.includes(advice)) {
    savedAdvice.push(advice);
  }
  res.json({ message: 'Advice saved!', savedAdvice });
});

app.get('/api/advice/saved', (req, res) => {
  res.json(savedAdvice);
});

app.delete('/api/advice/saved', (req, res) => {
  const { advice } = req.body;
  savedAdvice = savedAdvice.filter(a => a !== advice);
  res.json({ message: 'Advice deleted!', savedAdvice });
});

// Final catch-all for any request not handled by static files or API routes
app.use((req, res) => {
  const indexFile = path.join(projectRoot, 'index.html');
  res.sendFile(indexFile);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${projectRoot}`);
  console.log(`🏠 Index file path: ${path.join(projectRoot, 'index.html')}`);
});