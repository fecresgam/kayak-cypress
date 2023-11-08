// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />


describe('cookies management', () => {
  beforeEach(() => {
    cy.visit('https://www.kayak.es/');
  })

  it('displays cookies message', () => {
    cy.contains('div', 'Nos importa tu privacidad').should('be.visible');
    cy.contains('Usamos cookies técnicas, analíticas y de marketing para que te resulte más fácil iniciar sesión y reanudar tus búsquedas sin tener que empezar desde cero.').should('be.visible');
  });

  it.only('privacy policy available', () => {
    cy.contains('a', 'Política de privacidad', {'timeout': 8000})
        .as('privacyPolicy')
        .should('be.visible')
        .should('have.attr', 'target', '_blank')

    cy.get('@privacyPolicy')
        .invoke('removeAttr', 'target')
        .click();
    cy.contains('h1', 'Política de privacidad')
        .should('be.visible')
  });
});
