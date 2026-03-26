const express = require('express');
const { OpenAI } = require('openai');

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/chat/completions', async (req, res) => {  
    try {  
        const { messages } = req.body;  
        const response = await openai.chat.completions.create({  
            model: 'gpt-3.5-turbo',  
            messages,  
        });  
        res.json(response);  
    } catch (error) {  
        console.error('Error generating chat completion:', error);  
        res.status(500).json({ error: 'An error occurred while generating chat completion.' });  
    }  
});

// Handle extension connection
router.post('/extension/connect', (req, res) => {
    const { extensionId } = req.body;
    if (!extensionId) {
        return res.status(400).json({ error: 'Extension ID is required.' });
    }
    // Logic to handle connection goes here  
    res.json({ message: `Connected to extension ${extensionId}` });
});

module.exports = router;