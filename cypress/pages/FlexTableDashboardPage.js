class FlexTableDashboardPage {
  constructor() {
    
    this.createNewTableBtn = '.create-table-btn-wrapper > button.btn';
    this.tableRow = '.gswpts-table-row';
  }

  clickCreateTable() {
  
  cy.get('body', { timeout: 20000 }).should('be.visible');

  
  cy.contains('button', 'Create table from URL', { timeout: 20000 })
    .first()
    .should('be.visible')
    .click();
}

  verifyTableExists(tableTitle) {
    cy.contains(this.tableRow, tableTitle, { timeout: 15000 }).should('exist');
  }
}

export default new FlexTableDashboardPage();
