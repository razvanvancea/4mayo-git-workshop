describe('Place order test suite', () => {


    const baseUrl = "https://automationteststore.com/"
    
    it('Auth Acount with success test', () => {
      cy.visit(`${baseUrl}`);
      cy.get('#customer_menu_top').click();
      cy.get("div.returncustomer");
      cy.get('input#loginFrm_loginname').click();
      cy.get('#loginFrm_loginname').click().type('EstherAnna').should('have.value', 'EstherAnna');
      cy.get('#loginFrm_password').click().type('esther89').should('have.value', 'esther89');
      cy.get('button.btn > .fa-lock').click();
      cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click();
      cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36_38"]').should('contain.text', 'Face');
      cy.get('ul.thumbnails.row li:nth-child(3)').click();
      cy.get('div.thumbnails.grid.row.list-inline > div.col-md-3.col-sm-6.col-xs-12 > div.thumbnail > a[href="https://automationteststore.com/index.php?rt=product/product&path=43_45&product_id=94"]').click();
      cy.contains('Night Care Crema Nera Obsidian Mineral Complex');
      cy.get('a > i.fa.fa-cart-plus.fa-fw').click();
      cy.contains('Shopping Cart');
      cy.get('#cart_checkout1').click();
      cy.contains(' Checkout Confirmation');
      cy.get('td.checkout_heading').should('be.visible');
      cy.get('#checkout_btn').click();
      cy.contains('div.container-fluid', ' Your Order Has Been Processed!').should('be.visible');

    })
  
})