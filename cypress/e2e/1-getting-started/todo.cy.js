/// <reference types="cypress" />


describe('home page', () => {
  beforeEach(() => {
    cy.visit('https://www.kayak.es/');
  });

  it('displays cookies message', () => {
    cy.contains('Usamos cookies').should('be.visible');
  });
});
