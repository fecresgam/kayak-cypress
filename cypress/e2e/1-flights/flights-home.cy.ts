/// <reference types="cypress" />

import { CommonPage } from "../../support/pages/common.page";
import { FlightsPage as FlightsPage } from "../../support/pages/flights.page";
import { StaysPage as StaysPage } from "../../support/pages/stays.page";

const COMMON_PAGE = new CommonPage();
const FLIGHTS_PAGE = new FlightsPage();
const STAYS_PAGE = new StaysPage();

describe("cookies management", () => {
  beforeEach(() => {
    cy.visit("https://www.kayak.es/");
    cy.acceptCookies();
  });

  it("arrive through the main menu", () => {
    cy.get(COMMON_PAGE.mainMenu.stays).should("be.visible").click();
    cy.get(COMMON_PAGE.mainMenu.flights).should("be.visible").click();
    cy.contains(FLIGHTS_PAGE.label.distinguishableTittle).should("be.visible");
  });
});
