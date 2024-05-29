describe('Login Logout test suite', () => {

    const baseUrl = "https://automationteststore.com/"
    
    it('Auth Acount with success test', () => {
      cy.visit(`${baseUrl}`);
      cy.get('#customer_menu_top').click();
      cy.get("div.returncustomer");
      cy.get('input#loginFrm_loginname').click();
      cy.get('#loginFrm_loginname').click().type('EstherAnna').should('have.value', 'EstherAnna');
      cy.get('#loginFrm_password').click().type('esther89').should('have.value', 'esther89');
      cy.get('button.btn > .fa-lock').click();
      cy.get('div.myaccountbox').should('contain', 'Account Dashboard')
      cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(9) > a > i').click();
      cy.contains('p', 'You have been logged off your account. It is now safe to leave the computer.').should('be.visible');
      
    })
  
  })