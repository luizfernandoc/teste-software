describe('RF2 - Login de Cliente', () => {
    beforeEach(() => {
      cy.fixture('user.json').as('users');
    });
  
    it('CT-RF2-001 - O cliente realiza login com e-mail e senha corretos.', function () {
      cy.login(this.users.validLoginUser.email, this.users.validLoginUser.password);
      cy.contains(`Logged in as ${this.users.validLoginUser.name}`).should('be.visible');
    });
  
  });
  