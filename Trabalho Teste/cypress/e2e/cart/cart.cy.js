describe('RF3 - Adicionar Produto ao Carrinho', () => {
    beforeEach(() => {
      cy.visit('/products');
    });
  
    it('CT-RF3-001 - O cliente adiciona um produto disponível ao carrinho.', () => {
      cy.fixture('products.json').then((products) => {
        const product = products.product1;
        cy.addProductToCart(product.name);
        cy.visit('/view_cart');
        cy.get('.cart_description').contains(product.name).should('be.visible');
        cy.get('.cart_quantity').should('contain', product.quantity);
      });
    });
  
    it('Deve adicionar múltiplos produtos ao carrinho', () => {
      cy.fixture('products.json').then((products) => {
        const product1 = products.product1;
        const product2 = products.product2;
  
        cy.addProductToCart(product1.name);
        cy.addProductToCart(product2.name);
        cy.addProductToCart(product2.name);

        cy.visit('/view_cart');

        cy.get('.cart_description').contains(product1.name).should('be.visible');
        cy.get('.cart_description').contains(product2.name).should('be.visible');
        cy.get('.cart_quantity').contains(product1.quantity).should('be.visible');
        cy.get('.cart_quantity').contains(product2.quantity).should('be.visible');
      });
    });
  });
  