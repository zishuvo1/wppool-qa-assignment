import MyAccountPage from '../../pages/MyAccountPage';
import data from '../../fixtures/data.json';

describe('WPPOOL - WooCommerce Order History', () => {
  before(() => {
    cy.login(data.wordpress.username, data.wordpress.password);
    cy.visit(data.woocommerce.myAccountUrl);
  });

  it('should show past orders', () => {
    MyAccountPage.goToOrders();
    cy.get('.woocommerce-orders-table').should('be.visible');
    cy.get('.woocommerce-orders-table tbody tr').its('length').should('be.gte', 1);
  });
});
