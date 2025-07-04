describe('Hero Interaction Tests', () => {
  it('Should increase fans and saves counts after interactions', () => {
    cy.visit('http://localhost:3000/heroes');
    cy.get('li > .undefined').first().click();
    cy.get('[data-cy="email"]').type('test@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.get('.bg-blue-700').click();
    cy.get("[data-cy='fans']").eq(0).should('be.visible');
    cy.get("[data-cy='fans']").eq(0).invoke('text').then((initialFansText) => {
      const initialFansCount = parseInt(initialFansText.trim(), 10);
      cy.get("[data-cy='like']").eq(0).click();
      cy.get("[data-cy='fans']").eq(0).should('be.visible').should(($fansElement) => {
          const currentFansCount = parseInt($fansElement.text().trim(), 10);
          expect(currentFansCount).to.be.greaterThan(initialFansCount);
        }).then(() => {
          cy.get("[data-cy='fans']").eq(0).invoke('text').then((finalFansText) => {
            cy.log(`Fans após clique (final): ${parseInt(finalFansText.trim(), 10)}`);
            cy.log('Sucesso: O número de fãs aumentou!');
          });
        });
    });
    cy.get("[data-cy='saves']").eq(0).should('be.visible');
    cy.get("[data-cy='saves']").eq(0).invoke('text').then((initialSavesText) => {
      const initialSavesCount = parseInt(initialSavesText.trim(), 10);
      cy.get("[data-cy='money']").eq(0).click();
      cy.wrap(initialSavesCount).as('initialSavesCountAlias');
    });
    cy.get(".text-white").click();
    cy.get('@initialSavesCountAlias').then((initialSavesCount) => {
      cy.get("[data-cy='saves']").eq(0).should('be.visible').should(($savesElement) => {
        const currentSavesCount = parseInt($savesElement.text().trim(), 10);
        expect(currentSavesCount).to.be.greaterThan(initialSavesCount);
        }).then(() => {
          cy.get("[data-cy='saves']").eq(0).invoke('text').then((finalSavesText) => {
            cy.log(`Saves após clique (final): ${parseInt(finalSavesText.trim(), 10)}`);
              cy.log('Sucesso: O número de saves aumentou!');
          });
        });
    });
  });
});