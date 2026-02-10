module.exports = {
  apps: [
    {
      name: "crm-api",
      cwd: "/var/www/crm-backend",
      script: "dist/index.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};
