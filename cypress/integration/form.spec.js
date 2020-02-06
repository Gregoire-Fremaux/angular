import { createYield } from "typescript";

describe("Form test", () => {
    it("Can fill the form", () => {
      cy.visit("http://localhost:4200/");
      cy.get("#form");

      cy.get("#mail").type("greg@greg.fr");
      cy.get("#pass").type("toto");
      cy.get("#valid").click();
    });

    it("validation ok", ()=>{
        cy.get("#ok")
    });
  });