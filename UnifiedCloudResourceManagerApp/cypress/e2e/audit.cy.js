describe("Audit Log", () => {
  it("renders audit page", () => {
    cy.visit("/audit");
    cy.contains(/audit log/i).should("exist");
  });
});
