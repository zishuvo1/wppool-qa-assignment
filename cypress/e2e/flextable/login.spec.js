describe("WP Login Test", () => {

  before(() => {
    cy.log("=== Starting WP Login Test ===");
  });

  it("Logs into WordPress", () => {
    const wpUrl = Cypress.env("WP_URL");
    const username = Cypress.env("WP_USERNAME");
    const password = Cypress.env("WP_PASSWORD");

    cy.log("WP_URL:", wpUrl);
    cy.log("WP_USERNAME:", username);

    // Visit login page
    cy.visit(wpUrl);

    // Fill credentials
    cy.get("#user_login").type(username);
    cy.get("#user_pass").type(password);
    cy.get("#wp-submit").click();

    // Verify dashboard loaded
    cy.url().should("include", "/wp-admin/");
  });

  after(() => {
    cy.log("=== WP Login Test Completed ===");
  });

});
