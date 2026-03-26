const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const openai = new OpenAIApi(new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY', // Replace with your OpenAI API key
}));

app.use(express.json());

app.post('/v1/chat/completions', async (req, res) => {
  const { messages } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong!' });
  }
});

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    // Process incoming message and send response back
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
