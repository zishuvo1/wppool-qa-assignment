class MyAccountPage {
  constructor() {
    this.ordersLink = 'a[href*="orders"]';
    this.orderRow = '.order';
  }

  goToOrders() {
    cy.get(this.ordersLink).click();
  }

  verifyOrderExists(orderNumber) {
    cy.get(this.orderRow).contains(orderNumber).should('be.visible');
  }
}

export default new MyAccountPage();
