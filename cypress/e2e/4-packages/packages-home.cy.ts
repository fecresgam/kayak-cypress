/// <reference types="cypress" />

import { CommonPage } from "../../support/pages/common.page";
import { PackagesPage } from "../../support/pages/packages.page";

const COMMON_PAGE = new CommonPage();
const PACKAGES_PAGE = new PackagesPage();

describe("cookies management", () => {
  beforeEach(() => {
    cy.visit("https://www.kayak.es/");
    cy.acceptCookies();
  });

  it("arrive through the main menu", () => {
    cy.get(COMMON_PAGE.mainMenu.packages).should("be.visible").click();
    cy.contains(PACKAGES_PAGE.label.distinguishableTittle).should("be.visible");
  });
});
