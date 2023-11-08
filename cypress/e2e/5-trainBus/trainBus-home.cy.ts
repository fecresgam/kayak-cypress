/// <reference types="cypress" />

import { CommonPage } from "../../support/pages/common.page";
import { TrainBusPage as TrainBusPage } from "../../support/pages/trainBus.page";

const COMMON_PAGE = new CommonPage();
const TRAIN_BUS_PAGE = new TrainBusPage();

describe("cookies management", () => {
  beforeEach(() => {
    cy.visit("https://www.kayak.es/");
    cy.acceptCookies();
  });

  it("arrive through the main menu", () => {
    cy.get(COMMON_PAGE.mainMenu.trainBus).should("be.visible").click();
    cy.contains(TRAIN_BUS_PAGE.label.distinguishableTittle).should(
      "be.visible"
    );
  });
});
