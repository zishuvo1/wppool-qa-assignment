import './commands';

// Global before/after hooks
before(() => {
  cy.log("=== Starting WPPOOL Automation Test Suite ===");
});

beforeEach(() => {
  cy.log("--- Starting a new test ---");
});

afterEach(() => {
  cy.log("--- Test finished ---");
});

after(() => {
  cy.log("=== WPPOOL Automation Test Suite Completed ===");
});

// Ignore uncaught JS errors (React / plugin / FlexTable)
Cypress.on('uncaught:exception', (err, runnable) => {
  console.warn("Caught uncaught exception:", err.message);
  return false; // prevents test fail
});

// Optional: helper function
Cypress.Commands.add("logStep", (message) => {
  cy.log(`🔹 ${message}`);
});
