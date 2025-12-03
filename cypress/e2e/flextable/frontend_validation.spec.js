import FrontendTablePage from '../../pages/FrontendTablePage';
import data from '../../fixtures/data.json';
import testData from '../../fixtures/testData.json';

describe('WPPOOL - FlexTable Frontend Validation', () => {
  it('should verify table renders correctly with data', () => {
    cy.visit(data.flextable.frontendPageUrl);
    FrontendTablePage.verifyTableRendered();

    FrontendTablePage.verifyCellData(0, 0, 'Expected Value from Sheet'); 
  });
});
