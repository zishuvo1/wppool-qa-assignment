class FrontendTablePage {
  constructor() {
    this.tableSelector = 'table.gswpts-table';
  }

  verifyTableRendered() {
    cy.get(this.tableSelector).should('be.visible');
  }

  verifyCellData(row, col, expectedValue) {
    cy.get(`${this.tableSelector} tbody tr`)
      .eq(row)
      .find('td')
      .eq(col)
      .should('contain.text', expectedValue);
  }
}

export default new FrontendTablePage();
