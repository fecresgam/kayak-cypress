import { CommonPage } from "../pages/common.page";

const COMMON_PAGE = new CommonPage();

export const acceptCookies = () => {
  cy.get(COMMON_PAGE.button.accept).should("be.visible").click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      acceptCookies: typeof acceptCookies;
    }
  }
}

Cypress.Commands.add("acceptCookies", acceptCookies);
