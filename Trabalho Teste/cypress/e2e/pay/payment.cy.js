describe('RF5 - Pagamento', () => {
  beforeEach(() => {
    
    cy.visit('/'); 
    cy.fixture('user').then((user) => {
      cy.login(user.validLoginUser.email, user.validLoginUser.password); 
    });
    cy.fixture('products').then((products) => {
      cy.addProductToCart(products.product1.name); 
    });
    
    cy.contains('Cart').click(); 
    cy.contains('Proceed To Checkout').click(); 

  });

  it('CT-RF5-001 - Validar que o sistema processa corretamente o pagamento com um cartão válido.', () => {
    
    cy.contains('Place Order').click();
    
    
    cy.get('input[name="name_on_card"]').type('Guilherme Jenner');
    cy.get('input[name="card_number"]').type('4111111111111111'); 
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2025'); 
    cy.get('input[name="cvc"]').type('123'); 
    cy.get('#submit').click(); 

   
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible'); 
  });

  it('CT-RF5-002 - Validar que o sistema rejeita o pagamento e exibe mensagem apropriada para cartões inválidos', () => {
    
    cy.contains('Place Order').click();
    
    
    cy.get('input[name="name_on_card"]').type('Rodolfo 123');
    cy.get('input[name="card_number"]').type('1234567890123456'); 
    cy.get('input[name="expiry_month"]').type('01');
    cy.get('input[name="expiry_year"]').type('2022'); 
    cy.get('input[name="cvc"]').type('000'); 
    cy.get('#submit').click(); 

   
    cy.contains('Your payment was declined, credit card invalid!').should('be.visible'); 
  });
});
