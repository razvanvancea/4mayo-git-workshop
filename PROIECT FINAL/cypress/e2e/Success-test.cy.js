describe('Ath site test suite', () => {


  const baseUrl = "https://automationteststore.com/"
  
  it('Register Acount with success test', () => {
    cy.visit(`${baseUrl}`);
    cy.get('#customer_menu_top').click();
    cy.get("input#accountFrm_accountregister");
    cy.get('button.btn > .fa-check').click();
    cy.contains("Create Account");
    cy.get('#AccountFrm_firstname').click().type('Esther').should('have.value', 'Esther');
    cy.get('#AccountFrm_lastname').type('Anna').should('have.value', 'Anna');
    cy.get('#AccountFrm_email').type('ana.saramaria@gmail.com').should('have.value', 'ana.saramaria@gmail.com');
    cy.contains("Your Address");
    cy.get('#AccountFrm_address_1').click().type('Bulevardul Pipera 1/1');
    cy.get('#AccountFrm_city').click().type('Voluntari');
    cy.get('#AccountFrm_postcode').click().type('077190');
    cy.get('select[name="country_id"]').select('Romania').find('option:selected').should('have.text', 'Romania');
    cy.get('select[name="zone_id"]').select('2679');
    cy.get('select[name="zone_id"]').find('option:selected').should('contain.text', 'Alba');
    cy.get('#AccountFrm_loginname').click().type('Ana_saramaria');
    cy.get('#AccountFrm_password').click().type('esther89');
    cy.get('#AccountFrm_confirm').click().type('esther89');
    cy.contains("Newsletter").get('#AccountFrm_newsletter0').click();
    cy.contains('I have read and agree to the');
    cy.get('#AccountFrm_agree').click().get('button.lock-on-click').click();
    cy.get('div.ct_padding_right').should('contain.text', ' Your Account Has Been Created!');
  })

})