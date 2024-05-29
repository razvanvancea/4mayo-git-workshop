describe('Edit account name test.cy suite', () => {

    const baseUrl = "https://automationteststore.com/"
    
    it('Auth Acount with success test', () => {
      cy.visit(`${baseUrl}`);
      cy.get('#customer_menu_top').click();
      cy.get("div.returncustomer");
      cy.get('input#loginFrm_loginname').click();
      cy.get('#loginFrm_loginname').click().type('EstherAnna').should('have.value', 'EstherAnna');
      cy.get('#loginFrm_password').click().type('esther89').should('have.value', 'esther89');
      cy.get('button.btn > .fa-lock').click();
      cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(1) > a > i').click();
      cy.contains("My Account Information");
      cy.get('#AccountFrm_firstname').click().type(' Mircea').should('have.value', 'Esther Mircea');
      cy.get('button.btn.lock-on-click > .fa.fa-check').click();
      cy.contains('div.alert.alert-success', 'Success: Your account has been successfully updated.').should('be.visible');

    })
  
  })