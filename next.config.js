const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/offline.html'  // ✅ Offline fallback
  }
});

module.exports = withPWA({
  reactStrictMode: true,
});
