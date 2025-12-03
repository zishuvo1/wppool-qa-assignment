class FlexTableCreatePage {
  fillTableForm(sheetUrl, title, description) {
    cy.get('#sheet_url').type(sheetUrl);
    cy.get('#table_title').type(title);
    cy.get('#table_description').type(description);
    cy.get('button:contains("Save changes")').click();
  }
}

export default new FlexTableCreatePage();
