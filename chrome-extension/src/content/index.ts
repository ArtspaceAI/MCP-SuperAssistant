// platform detection function
function detectPlatform() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) {
        return 'chrome';
    } else if (userAgent.includes('Firefox')) {
        return 'firefox';
    } else if (userAgent.includes('Safari')) {
        return 'safari';
    }
    return 'unknown';
}

// message sending function
function sendMessage(message) {
    // send the message to the background script
    chrome.runtime.sendMessage(message, function(response) {
        console.log('Response:', response);
    });
}

// capturing response functionality
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Message received:', request);
    // handle the response here
    if (request.action === 'responseAction') {
        sendResponse({status: 'success', data: 'Response data'});
    }
});

// Example usage
const platform = detectPlatform();
console.log('Detected platform:', platform);
sendMessage({action: 'exampleAction', platform: platform});
