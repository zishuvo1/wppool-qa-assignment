import FlexTableEditPage from '../../pages/FlexTableEditPage';
import data from '../../fixtures/data.json';
import testData from '../../fixtures/testData.json';

describe('WPPOOL - Update FlexTable Layout & Styling', () => {
  before(() => {
    cy.login(data.wordpress.username, data.wordpress.password);
    cy.visit(data.flextable.dashboardUrl + '/tables/edit/5');
  });

  it('should enable layout options and update styling', () => {
    FlexTableEditPage.goToLayoutTab();
    FlexTableEditPage.enableLayoutOptions(testData.flextable.layoutOptions);
    FlexTableEditPage.goToStylingTab();
    FlexTableEditPage.setRowsPerPage(testData.flextable.rowsPerPage);
    FlexTableEditPage.setTableHeight(testData.flextable.tableHeight);
    FlexTableEditPage.saveChanges();

    cy.log('Layout & Styling updated successfully');
  });
});
