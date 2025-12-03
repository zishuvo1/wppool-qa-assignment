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

// Login
Cypress.Commands.add('login', (username, password) => {
  cy.visit(Cypress.env('WP_URL'));
  LoginPage.login(username, password);
});

// Plugin activation
Cypress.Commands.add('activatePlugin', (pluginName) => {
  cy.visit(Cypress.env('ADMIN_URL') + 'plugins.php');
  PluginPage.activatePlugin(pluginName);
});

// Create FlexTable
Cypress.Commands.add('createFlexTable', (sheetUrl, tableTitle, tableDescription) => {
  cy.visit(Cypress.env('FLEXTABLE_DASHBOARD_URL'));
  cy.get('body', { timeout: 10000 }).should('be.visible'); // wait for page
  FlexTableDashboardPage.clickCreateTable();
  FlexTableCreatePage.fillTableForm(sheetUrl, tableTitle, tableDescription);
  FlexTableCreatePage.saveTable();
});

// Edit FlexTable
Cypress.Commands.add('editFlexTable', (tableId, options) => {
  cy.visit(`${Cypress.env('FLEXTABLE_DASHBOARD_URL')}#/tables/edit/${tableId}`);
  FlexTableEditPage.updateTable(options);
});

// Validate frontend table
Cypress.Commands.add('validateFrontendTable', (tableShortcode) => {
  cy.visit(Cypress.env('FRONTEND_PAGE_URL'));
  cy.get('body', { timeout: 10000 }).should('be.visible');
  FrontendTablePage.verifyTableRendered(tableShortcode);
});

// WooCommerce
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

// Utility log
Cypress.Commands.add("logStep", (message) => {
  cy.log(`🔹 ${message}`);
});
