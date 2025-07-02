Cypress.Commands.add('getFansCount', (selector) => {
  return cy.get(selector).invoke('text').then(text => {
    return parseInt(text.trim(), 10);
  });
});