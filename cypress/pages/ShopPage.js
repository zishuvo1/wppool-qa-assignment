class ShopPage {
  constructor() {
    this.addToCartBtn = '.add_to_cart_button';
    this.cartIcon = '.cart-contents';
  }

  addProductToCart() {
    cy.get(this.addToCartBtn).first().click();
  }

  goToCart() {
    cy.get(this.cartIcon).click();
  }
}

export default new ShopPage();
