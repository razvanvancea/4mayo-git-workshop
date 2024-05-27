describe('Ath site test suite', () => {


    const baseUrl = "https://automationteststore.com/"
    
    it('Auth Acount with success test', () => {
      cy.visit(`${baseUrl}`);
      cy.get('#customer_menu_top').click();
      cy.get("div.returncustomer");
      cy.get('input#loginFrm_loginname').click();
    })
  
  })