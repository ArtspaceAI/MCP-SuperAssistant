// openai-message-handler.ts

// Function to send messages to OpenAI chat interfaces
function sendMessageToChatInterface(message: string, chatName: string) {
    const chatInterfaces = {
        'Gemini': document.querySelector('.gemini-chat-input'),
        'ChatGPT': document.querySelector('.chatgpt-chat-input'),
        'Perplexity': document.querySelector('.perplexity-chat-input')
    };

    const inputField = chatInterfaces[chatName];
    if (inputField) {
        inputField.value = message;
        // Trigger input or send button logic as needed
        const event = new Event('input', { bubbles: true });
        inputField.dispatchEvent(event);
        // Assuming there is a send button to click
        const sendButton = document.querySelector('.send-button');
        sendButton.click();
    } else {
        console.error('Chat interface not found:', chatName);
    }
}

// Function to capture responses from OpenAI chat interfaces
function captureChatResponses(chatName: string) {
    const responseSelectors = {
        'Gemini': '.gemini-chat-response',
        'ChatGPT': '.chatgpt-chat-response',
        'Perplexity': '.perplexity-chat-response'
    };

    const responseElement = document.querySelector(responseSelectors[chatName]);
    if (responseElement) {
        return responseElement.innerText;
    } else {
        console.error('Response element not found for chat:', chatName);
        return '';
    }
}

// Example usage
sendMessageToChatInterface('Hello, how can I help you?', 'Gemini');
// Capture response (you might want to set a timeout or listen for responses)
setTimeout(() => {
    const response = captureChatResponses('Gemini');
    console.log('Response from Gemini:', response);
}, 2000);