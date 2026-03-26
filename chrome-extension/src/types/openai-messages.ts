// TypeScript types for OpenAI chat completions format

// Represents a single message in the chat completion
export type ChatMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

// Represents the chat completion response
export type ChatCompletionResponse = {
    id: string;
    object: 'chat.completion';
    created: number;
    choices: Array<{
        index: number;
        message: ChatMessage;
        finish_reason: 'stop' | 'length';
    }>;
}; 

// Represents the request to create a chat completion
export type ChatCompletionRequest = {
    model: string;
    messages: ChatMessage[];
    temperature?: number;
    top_p?: number;
    n?: number;
    stream?: boolean;
    stop?: string | string[];
};