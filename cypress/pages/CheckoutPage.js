class CheckoutPage {
  constructor() {
    this.firstName = '#billing_first_name';
    this.lastName = '#billing_last_name';
    this.address = '#billing_address_1';
    this.city = '#billing_city';
    this.phone = '#billing_phone';
    this.email = '#billing_email';
    this.placeOrderBtn = '#place_order';
    this.paymentMethodCOD = '#payment_method_cod';
  }

  fillBilling(details) {
    cy.get(this.firstName).clear().type(details.firstName);
    cy.get(this.lastName).clear().type(details.lastName);
    cy.get(this.address).clear().type(details.address);
    cy.get(this.city).clear().type(details.city);
    cy.get(this.phone).clear().type(details.phone);
    cy.get(this.email).clear().type(details.email);
  }

  selectCOD() {
    cy.get(this.paymentMethodCOD).check({ force: true });
  }

  placeOrder() {
    cy.get(this.placeOrderBtn).click();
  }
}

export default new CheckoutPage();
