/// <reference types="cypress" />


describe('cookies management', () => {
  beforeEach(() => {
    cy.visit('https://www.kayak.es/');
  });

  it('displays cookies message', () => {
    cy.contains('div', 'Nos importa tu privacidad').should('be.visible');
    // eslint-disable-next-line max-len
    cy.contains('Usamos cookies técnicas, analíticas y de marketing para que te resulte más fácil iniciar sesión y reanudar tus búsquedas sin tener que empezar desde cero.').should('be.visible');
  });

  it('privacy policy available', () => {
    cy.contains('a', 'Política de privacidad')
        .as('privacyPolicy')
        .should('be.visible')
        .should('have.attr', 'target', '_blank');

    cy.get('@privacyPolicy')
        .invoke('removeAttr', 'target')
        .click()
        .contains('h1', 'Política de privacidad')
        .should('be.visible');
  });
});
