// response-capture.ts

/**
 * Utility functions to detect and extract AI responses from various chat platforms.
 */

// Function to detect AI response from ChatGPT
export function detectChatGPTResponse(response: string): boolean {
    // Logic to identify ChatGPT response (e.g., specific markers, keywords, format)
    return response.includes("ChatGPT:") || response.includes("AI:");
}

// Function to detect AI response from Gemini
export function detectGeminiResponse(response: string): boolean {
    // Logic to identify Gemini response
    return response.includes("Gemini:");
}

// Function to detect AI response from Perplexity
export function detectPerplexityResponse(response: string): boolean {
    // Logic to identify Perplexity response
    return response.includes("Perplexity:");
}

// Function to extract response
export function extractAIResponse(platform: string, fullResponse: string): string | null {
    switch (platform) {
        case 'ChatGPT':
            return detectChatGPTResponse(fullResponse) ? fullResponse : null;
        case 'Gemini':
            return detectGeminiResponse(fullResponse) ? fullResponse : null;
        case 'Perplexity':
            return detectPerplexityResponse(fullResponse) ? fullResponse : null;
        default:
            return null;
    }
}
