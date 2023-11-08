/// <reference types="cypress" />

import { CommonPage } from "../../support/pages/common.page";

const COMMON_PAGE = new CommonPage();

describe("cookies management", () => {
  beforeEach(() => {
    cy.visit("https://www.kayak.es/");
  });

  it("displays cookies message", () => {
    cy.contains("div", COMMON_PAGE.label.cookiesModalTittle).should(
      "be.visible"
    );
    cy.contains(COMMON_PAGE.label.cookiesModalDescription).should("be.visible");
  });

  it("privacy policy available", () => {
    cy.contains("a", COMMON_PAGE.label.privacyPolicyLink, { timeout: 8000 })
      .as("privacyPolicy")
      .should("be.visible")
      .should("have.attr", "target", "_blank");

    cy.get("@privacyPolicy").invoke("removeAttr", "target").click();
    cy.contains("h1", COMMON_PAGE.label.privacyPolicyLink).should("be.visible");
  });

  it("accept cookies", () => {
    cy.contains("div", COMMON_PAGE.label.cookiesModalTittle).should(
      "be.visible"
    );
    cy.acceptCookies();
    cy.contains("div", COMMON_PAGE.label.cookiesModalTittle).should(
      "not.exist"
    );
  });
});
