describe("Multi-cloud navigation", () => {
  it("navigates to provider pages", () => {
    cy.visit("/");
    cy.contains(/dashboard/i).should("exist");
    cy.contains("AWS").click();
    cy.contains(/aws resources/i).should("exist");
    cy.contains("Azure").click();
    cy.contains(/azure resources/i).should("exist");
    cy.contains("GCP").click();
    cy.contains(/gcp resources/i).should("exist");
  });
});
