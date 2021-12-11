module.exports = {
  apps: [
    {
      name: '[8001] Umami Analytics',
      script: 'next start -p 3003',
      watch: true,
      env: {
        DATABASE_URL: '',
        HASH_SALT: '',
      },
    },
  ],
};
