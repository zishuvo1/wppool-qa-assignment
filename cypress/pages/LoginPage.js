class LoginPage {
  constructor() {
    this.usernameField = '#user_login';
    this.passwordField = '#user_pass';
    this.loginButton = '#wp-submit';
  }

  login(username, password) {
    cy.get(this.usernameField).clear().type(username);
    cy.get(this.passwordField).clear().type(password);
    cy.get(this.loginButton).click();
  }
}

export default new LoginPage();
