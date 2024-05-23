describe('Ath site test suite', () => {

  it('Get access', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get("#loginFrm").should('contain', "Login Name:");
    cy.get("#button.sumit").click();
    cy.get("span.maintext");
    cy.get("div.alert-danger").should('contain', 'Error: Incorrect login or password provided.');
  })

})