import PluginPage from '../../pages/PluginPage';
import data from '../../fixtures/data.json';

describe('WPPOOL - FlexTable Plugin Activation', () => {
  before(() => {
    cy.visit(data.wordpress.loginUrl);
    cy.get('#user_login').type(data.wordpress.username);
    cy.get('#user_pass').type(data.wordpress.password);
    cy.get('#wp-submit').click();
  });

  it('should activate FlexTable plugin if inactive', () => {
    cy.visit(data.wordpress.adminUrl + 'plugins.php');
    PluginPage.searchPlugin('FlexTable');
    cy.get('body').then(($body) => {
      if ($body.find('.activate-now').length > 0) {
        PluginPage.activatePlugin();
        cy.log('FlexTable plugin activated');
      } else {
        cy.log('FlexTable plugin already active');
      }
    });
  });
});
