import FlexTableDashboardPage from '../../pages/FlexTableDashboardPage';
import FlexTableCreatePage from '../../pages/FlexTableCreatePage';

describe('WPPOOL - Create FlexTable', () => {

  before(() => {
    cy.log('=== Starting WPPOOL Automation Test Suite ===');
    cy.visit(Cypress.env('WP_URL'));
    cy.get('#user_login').type(Cypress.env('WP_USERNAME'));
    cy.get('#user_pass').type(Cypress.env('WP_PASSWORD'));
    cy.get('#wp-submit').click();
    cy.url({ timeout: 10000 }).should('include', '/wp-admin');
  });

  it('should create a new FlexTable using Google Sheet', () => {
    cy.visit(Cypress.env('FLEXTABLE_DASHBOARD_URL'));

    FlexTableDashboardPage.clickCreateTable();

    const tableTitle = 'Cypress Auto Table';
    FlexTableCreatePage.fillTableForm(
      Cypress.env('SHEET_URL'),
      tableTitle,
      'Created automatically by Cypress'
    );

    FlexTableDashboardPage.verifyTableExists(tableTitle);

    cy.visit(Cypress.env('FRONTEND_PAGE_URL'));
    cy.contains(tableTitle).should('be.visible');
  });

});
