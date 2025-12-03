describe("ENV Check", () => {
  it("Should print environment variables", () => {
    cy.log(Cypress.env("WP_URL"));
    cy.log(Cypress.env("WP_USERNAME"));
    cy.log(Cypress.env("WP_PASSWORD"));
  });
});
