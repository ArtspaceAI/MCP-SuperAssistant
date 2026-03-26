// openai-formatter.ts

// Function to convert extension message to OpenAI API format
export function convertMessageToOpenAIFormat(extensionMessage) {
    // Implement conversion logic here
    return {
        model: 'gpt-3.5-turbo',
        messages: extensionMessage.messages.map(msg => ({
            role: msg.role,
            content: msg.content,
        })),
    };
}

// Function to convert OpenAI API format response back to extension message format
export function convertOpenAIResponseToExtensionFormat(openAIResponse) {
    // Implement reverse conversion logic here
    return {
        messages: openAIResponse.choices[0].message.map(msg => ({
            role: msg.role,
            content: msg.content,
        })),
    };
}

// Function to transform errors from OpenAI API
export function transformOpenAIError(openAIError) {
    return {
        message: openAIError.message || 'An unknown error occurred',
        code: openAIError.code || 'UNKNOWN_ERROR',
    };
}