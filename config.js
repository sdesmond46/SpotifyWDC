// The necessary configuration for your server
// Contains credentials for your Spotify application
// And the new redirect path for the OAuth flow
// Should be kept secret
module.exports = {
 'PORT': 3000,
 'CLIENT_ID': 'f0551d1b48d241b9a21d6264c828fd7b',
 'CLIENT_SECRET': '7931169be79e44a19a4d21e449e84a74',
 'REDIRECT_URI': 'http://localhost:3000/callback'
};
