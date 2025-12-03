class OrdersPage {
  constructor() {
    this.orderRows = '.order';
    this.viewOrderBtn = '.view';
  }

  viewOrder(orderNumber) {
    cy.get(this.orderRows)
      .contains(orderNumber)
      .parent()
      .find(this.viewOrderBtn)
      .click();
  }

  verifyOrderDetails(orderNumber) {
    cy.get('h1').should('contain.text', `Order #${orderNumber}`);
  }
}

export default new OrdersPage();
