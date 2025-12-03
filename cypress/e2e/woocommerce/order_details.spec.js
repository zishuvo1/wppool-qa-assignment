import OrdersPage from '../../pages/OrdersPage';
import data from '../../fixtures/data.json';

describe('WPPOOL - WooCommerce Order Details', () => {
  before(() => {
    cy.login(data.wordpress.username, data.wordpress.password);
    cy.visit(data.woocommerce.ordersUrl);
  });

  it('should view order details correctly', () => {
    cy.get('.woocommerce-orders-table tbody tr').first().find('.view').click();
    cy.url().should('include', '/view-order/');
    cy.get('h1').should('contain.text', 'Order #');
  });
});
