describe("Chat box", () => {
  before(() => cy.visit("/"));

  it("Check notifications", () => {
    cy.get(".badge").contains(1);
  });

  it("Open chat box and hide notification badge", () => {
    cy.get(".chat-head").click();
    cy.get(".chat-body").should("exist");
    cy.get(".badge").should("not.exist");
  });

  it("Send a new message", () => {
    cy.get(".chat-text textarea")
      .type("Good morning!")
      .type("{enter}");

    cy.get(".msg-sent:last-of-type").contains("Good morning!");
  });

  it("Close chat box", () => {
    cy.get(".chat-head").click();
    cy.get(".chat-body").should("not.exist");
  });
});
