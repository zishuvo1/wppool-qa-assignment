const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.WP_URL,  
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      return config;
    },
  },
  env: {
    WP_URL: process.env.WP_URL,
    WP_USERNAME: process.env.WP_USERNAME,
    WP_PASSWORD: process.env.WP_PASSWORD,
    ADMIN_URL: process.env.ADMIN_URL,
    FLEXTABLE_DASHBOARD_URL: process.env.FLEXTABLE_DASHBOARD_URL,
    FRONTEND_PAGE_URL: process.env.FRONTEND_PAGE_URL,
    SHEET_URL: process.env.SHEET_URL,
    SHOP_URL: process.env.SHOP_URL,
    CHECKOUT_URL: process.env.CHECKOUT_URL,
    MY_ACCOUNT_URL: process.env.MY_ACCOUNT_URL,
    ORDERS_URL: process.env.ORDERS_URL,
  },
});
