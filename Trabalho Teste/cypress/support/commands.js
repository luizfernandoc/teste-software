// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
  });
  
Cypress.Commands.add('signup', (user) => {
  cy.visit('/login');
  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();

  // Preenchendo o formulário de cadastro completo
  cy.get('input[id="id_gender1"]').check();
  cy.get('input[id="password"]').type(user.password);
  cy.get('select[id="days"]').select(user.birthDay);
  cy.get('select[id="months"]').select(user.birthMonth);
  cy.get('select[id="years"]').select(user.birthYear);
  cy.get('input[id="first_name"]').type(user.firstName);
  cy.get('input[id="last_name"]').type(user.lastName);
  cy.get('input[id="company"]').type(user.company);
  cy.get('input[id="address1"]').type(user.address1);
  cy.get('input[id="address2"]').type(user.address2);
  cy.get('select[id="country"]').select(user.country);
  cy.get('input[id="state"]').type(user.state);
  cy.get('input[id="city"]').type(user.city);
  cy.get('input[id="zipcode"]').type(user.zipcode);
  cy.get('input[id="mobile_number"]').type(user.mobileNumber);
  cy.get('button[data-qa="create-account"]').click();
});

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.productinfo').contains(productName).parents('.single-products').find('.add-to-cart').first().click();
    cy.get('.modal-footer').contains('Continue Shopping').click();
});
  
  
  
  