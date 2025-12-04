import './commands';


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


Cypress.on('uncaught:exception', (err, runnable) => {
  console.warn("Caught uncaught exception:", err.message);
  return false;
});


Cypress.Commands.add("logStep", (message) => {
  cy.log(`🔹 ${message}`);
});
