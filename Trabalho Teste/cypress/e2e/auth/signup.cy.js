describe('RF1 - Cadastro de Cliente', () => {
    beforeEach(() => {
      cy.fixture('user.json').as('users');
    });
  
    it('CT-RF1-001 - O usuário realiza um cadastro com informações válidas.', function () {
      const user = this.users.validSignUpUser;
      cy.signup(user);
      cy.contains('Account Created!').should('be.visible');
      cy.get('a[data-qa="continue-button"]').click();
      cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
  

  });
  