import ShopPage from '../../pages/ShopPage';
import data from '../../fixtures/data.json';

describe('WPPOOL - WooCommerce Add to Cart', () => {
  before(() => {
    cy.login(data.wordpress.username, data.wordpress.password);
  });

  it('should add product to cart', () => {
    cy.visit(data.woocommerce.shopUrl);
    ShopPage.addProductToCart();
    cy.get('.woocommerce-message').should('contain.text', 'has been added to your cart');
    ShopPage.goToCart();
    cy.url().should('include', '/cart');
  });
});
