/// <reference types="cypress" />

import { CommonPage } from "../../support/pages/common.page";
import { CarsPage } from "../../support/pages/cars.page";

const COMMON_PAGE = new CommonPage();
const CARS_PAGE = new CarsPage();

describe("cookies management", () => {
  beforeEach(() => {
    cy.visit("https://www.kayak.es/");
    cy.acceptCookies();
  });

  it("arrive through the main menu", () => {
    cy.get(COMMON_PAGE.mainMenu.cars).should("be.visible").click();
    cy.contains(CARS_PAGE.label.distinguishableTittle).should("be.visible");
  });
});
