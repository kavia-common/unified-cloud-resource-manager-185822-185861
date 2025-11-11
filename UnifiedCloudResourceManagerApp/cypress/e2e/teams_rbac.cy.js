describe("Teams RBAC", () => {
  it("shows teams page", () => {
    cy.visit("/teams");
    cy.contains(/teams/i).should("exist");
  });
});
