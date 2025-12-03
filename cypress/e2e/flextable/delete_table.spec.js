import FlexTableDashboardPage from '../../pages/FlexTableDashboardPage';
import data from '../../fixtures/data.json';
import testData from '../../fixtures/testData.json';

describe('WPPOOL - Delete FlexTable', () => {
  before(() => {
    cy.login(data.wordpress.username, data.wordpress.password);
    cy.visit(data.flextable.dashboardUrl);
  });

  it('should delete the table and verify removal', () => {
    FlexTableDashboardPage.deleteTable(testData.flextable.tableTitle);
    cy.visit(data.flextable.frontendPageUrl);
    cy.contains(testData.flextable.tableTitle).should('not.exist');
  });
});
