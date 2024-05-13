describe('Weather App', () => {
    it('Go to Weater App', () => {
      cy.visit('http://localhost/');
      cy.get("input[type]").click();
      cy.get("input[type]").type("Iasi");
      cy.get("button").click({timeout: 2000});

      cy.get('.city').should('be.visible', {timeout: 1000});
      cy.get('.city').should('contain', 'Iasi', {timeout: 2000});

      cy.get('.details').should('be.visible', {timeout: 1000});
      cy.get('.details .wind').should('contain', 'km/h', {timeout: 2000});

      cy.get('.details').should('be.visible', {timeout: 1000});
      cy.get('.details .humidity').should('contain', '%', {timeout: 2000});
    })
  })
  