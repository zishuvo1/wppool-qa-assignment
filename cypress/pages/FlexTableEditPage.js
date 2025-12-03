class FlexTableEditPage {
  constructor() {
    this.layoutTab = 'a[href*="layout"]';
    this.stylingTab = 'a[href*="styling"]';
    this.showTitleCheckbox = '#show_table_title';
    this.showDescriptionCheckbox = '#show_table_description';
    this.showEntryInfoCheckbox = '#show_entry_info';
    this.showPaginationCheckbox = '#show_pagination';
    this.rowsPerPageInput = '#rows_per_page';
    this.tableHeightInput = '#table_height';
    this.fetchSaveBtn = '#save_changes';
  }

  goToLayoutTab() {
    cy.get(this.layoutTab).click();
  }

  goToStylingTab() {
    cy.get(this.stylingTab).click();
  }

  enableLayoutOptions(options = {}) {
    if (options.showTitle) cy.get(this.showTitleCheckbox).check({ force: true });
    if (options.showDescriptionBelow) cy.get(this.showDescriptionCheckbox).check({ force: true });
    if (options.showEntryInfo) cy.get(this.showEntryInfoCheckbox).check({ force: true });
    if (options.showPagination) cy.get(this.showPaginationCheckbox).check({ force: true });
  }

  setRowsPerPage(value) {
    cy.get(this.rowsPerPageInput).clear().type(value);
  }

  setTableHeight(value) {
    cy.get(this.tableHeightInput).clear().type(value);
  }

  saveChanges() {
    cy.get(this.fetchSaveBtn).click();
  }
}

export default new FlexTableEditPage();
