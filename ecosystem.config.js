module.exports = {
  apps : [{
    name: 'slack',
    script: './bin/www',
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
    },
  }],
};
