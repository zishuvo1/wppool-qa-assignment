import CheckoutPage from '../../pages/CheckoutPage';
import data from '../../fixtures/data.json';

describe('WPPOOL - WooCommerce Checkout', () => {
  before(() => {
    cy.login(data.wordpress.username, data.wordpress.password);
    cy.visit(data.woocommerce.checkoutUrl);
  });

  it('should complete checkout with Cash on Delivery', () => {
    CheckoutPage.fillBilling(data.woocommerce.billing);
    CheckoutPage.selectCOD();
    CheckoutPage.placeOrder();

    cy.get('.woocommerce-thankyou-order-received').should('be.visible');
    cy.contains('Thank you. Your order has been received.').should('exist');
  });
});
