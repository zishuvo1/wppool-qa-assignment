class PluginPage {
  constructor() {
    this.pluginSearchInput = '#plugin-search-input';
    this.activateButton = '.activate-now';
    this.uploadPluginButton = '.upload-plugin';
    this.installNowButton = '.install-now';
  }

  searchPlugin(pluginName) {
    cy.get(this.pluginSearchInput).clear().type(pluginName);
  }

  activatePlugin() {
    cy.get(this.activateButton).click();
  }

  uploadPlugin(filePath) {
    cy.get(this.uploadPluginButton).click();
    cy.get('input[type="file"]').attachFile(filePath);
    cy.get(this.installNowButton).click();
  }
}

export default new PluginPage();
