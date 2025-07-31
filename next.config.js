const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  fallbacks: {
    // Serve offline.html when no internet
    document: '/offline.html',
  },
});

module.exports = withPWA({
  reactStrictMode: true,
});
