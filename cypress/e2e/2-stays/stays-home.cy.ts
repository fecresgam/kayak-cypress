/// <reference types="cypress" />

import { CommonPage } from "../../support/pages/common.page";
import { StaysPage as StaysPage } from "../../support/pages/stays.page";

const COMMON_PAGE = new CommonPage();
const STAYS_PAGE = new StaysPage();

describe("cookies management", () => {
  beforeEach(() => {
    cy.visit("https://www.kayak.es/");
    cy.acceptCookies();
  });

  it("arrive through the main menu", () => {
    cy.get(COMMON_PAGE.mainMenu.stays).should("be.visible").click();
    cy.contains(STAYS_PAGE.label.distinguishableTittle).should("be.visible");
  });
});
