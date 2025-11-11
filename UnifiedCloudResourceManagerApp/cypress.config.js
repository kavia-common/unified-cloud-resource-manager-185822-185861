const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CI_BASE_URL || "http://localhost:3000",
    supportFile: false
  },
});
