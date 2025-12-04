import LoginPage from '../pages/LoginPage';
import PluginPage from '../pages/PluginPage';
import FlexTableDashboardPage from '../pages/FlexTableDashboardPage';
import FlexTableCreatePage from '../pages/FlexTableCreatePage';
import FlexTableEditPage from '../pages/FlexTableEditPage';
import FrontendTablePage from '../pages/FrontendTablePage';
import ShopPage from '../pages/ShopPage';
import CheckoutPage from '../pages/CheckoutPage';
import MyAccountPage from '../pages/MyAccountPage';
import OrdersPage from '../pages/OrdersPage';


Cypress.Commands.add('login', (username, password) => {
  cy.visit(Cypress.env('WP_URL'));
  LoginPage.login(username, password);
});


Cypress.Commands.add('activatePlugin', (pluginName) => {
  cy.visit(Cypress.env('ADMIN_URL') + 'plugins.php');
  PluginPage.activatePlugin(pluginName);
});


Cypress.Commands.add('createFlexTable', (sheetUrl, tableTitle, tableDescription) => {
  cy.visit(Cypress.env('FLEXTABLE_DASHBOARD_URL'));
  cy.get('body', { timeout: 10000 }).should('be.visible');
  FlexTableDashboardPage.clickCreateTable();
  FlexTableCreatePage.fillTableForm(sheetUrl, tableTitle, tableDescription);
  FlexTableCreatePage.saveTable();
});


Cypress.Commands.add('editFlexTable', (tableId, options) => {
  cy.visit(`${Cypress.env('FLEXTABLE_DASHBOARD_URL')}#/tables/edit/${tableId}`);
  FlexTableEditPage.updateTable(options);
});


Cypress.Commands.add('validateFrontendTable', (tableShortcode) => {
  cy.visit(Cypress.env('FRONTEND_PAGE_URL'));
  cy.get('body', { timeout: 10000 }).should('be.visible');
  FrontendTablePage.verifyTableRendered(tableShortcode);
});


Cypress.Commands.add('addToCart', (productName) => {
  cy.visit(Cypress.env('SHOP_URL'));
  ShopPage.addProductToCart(productName);
});

Cypress.Commands.add('checkoutCOD', (billingInfo) => {
  cy.visit(Cypress.env('CHECKOUT_URL'));
  CheckoutPage.fillBillingInfo(billingInfo);
  CheckoutPage.selectCODPayment();
  CheckoutPage.placeOrder();
});

Cypress.Commands.add('verifyOrderHistory', (username, password) => {
  cy.visit(Cypress.env('MY_ACCOUNT_URL'));
  MyAccountPage.login(username, password);
  MyAccountPage.viewOrders();
});

Cypress.Commands.add('verifyOrderDetails', (orderId) => {
  cy.visit(`${Cypress.env('ORDERS_URL')}/view-order/${orderId}`);
  OrdersPage.verifyOrder(orderId);
});


Cypress.Commands.add("logStep", (message) => {
  cy.log(`🔹 ${message}`);
});
