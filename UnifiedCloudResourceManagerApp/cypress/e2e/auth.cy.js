describe("Auth pages", () => {
  it("renders sign in and navigates to sign up", () => {
    cy.visit("/auth/signin");
    cy.contains(/sign in/i).should("exist");
    cy.contains(/create an account/i).click();
    cy.url().should("include", "/auth/signup");
  });
});
