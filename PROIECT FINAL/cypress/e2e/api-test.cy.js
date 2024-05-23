describe('Ath site test suite', () => {

  const baseUrl = "https://automationteststore.com/index.php?rt=account"

  it('Register Acount', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get("input#accountFrm_accountregister");
    cy.get('button.btn > .fa-check').click();
    cy.contains("Create Account");
  })

  // it('Get access', () => {
  //   cy.visit(`${baseUrl}/login`);
  //   cy.get(".form-horizontal").should('contain', "Login Name:");
  //   cy.get('input#loginFrm_loginname').should('contain','EstherAnna');
  // })

})