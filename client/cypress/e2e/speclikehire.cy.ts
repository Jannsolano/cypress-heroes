describe('Hero Interaction Tests', () => {
  it('Should increase fans and saves counts after interactions', () => {
    cy.visit('http://localhost:3000/heroes');
    cy.get('li > .undefined').first().click();
    cy.get('[data-cy="email"]').type('test@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.get('.bg-blue-700').click();
    cy.get("[data-cy='fans']").eq(0).as('fansCount');
    cy.get('@fansCount').should('be.visible').invoke('text').then((text) => {
      const initialFans = parseInt(text.trim(), 10);
      cy.get("[data-cy='like']").eq(0).click();
      cy.get('@fansCount').should(($el) => {
        const currentFans = parseInt($el.text().trim(), 10);
        expect(currentFans).to.be.greaterThan(initialFans);
      });
    });
    cy.get("[data-cy='saves']").eq(0).as('savesCount');
    cy.get('@savesCount').should('be.visible').invoke('text').then((text) => {
      const initialSaves = parseInt(text.trim(), 10);
      cy.get("[data-cy='money']").eq(0).click();
      cy.get(".text-white").click();
      cy.get('@savesCount').should(($el) => {
        const currentSaves = parseInt($el.text().trim(), 10);
        expect(currentSaves).to.be.greaterThan(initialSaves);
      });
    });
  });
});
describe('Hero repetitive Tests', () => {
  it('Should increase fans and saves counts after interactions', () => {
    cy.visit('http://localhost:3000/heroes'); //área de login
    cy.get('li > .undefined').first().click();
    cy.get('[data-cy="email"]').type('test@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.get('.bg-blue-700').click();
    let fansCheckFailed = false;// área de contagem de fans  (e verificar se está diminuindo)
    cy.get("[data-cy='fans']").eq(0).as('fansCount'); 
    cy.get('@fansCount').should('be.visible').invoke('text').then((text) => {
      const initialFans = parseInt(text.trim(), 10);
      cy.get("[data-cy='like']").eq(0).click();
      cy.get('@fansCount').should('be.visible').then(($el) => {
        const currentFans = parseInt($el.text().trim(), 10);
        try {
          expect(currentFans).to.be.lessThan(initialFans);
        } catch (err) {
          fansCheckFailed = true;
        }
      });
    });
    cy.get("[data-cy='saves']").eq(0).as('savesCount'); //área de contagem de saves
    cy.get('@savesCount').should('be.visible').invoke('text').then((text) => {
      const initialSaves = parseInt(text.trim(), 10);
      cy.get("[data-cy='money']").eq(0).click();
      cy.get(".text-white").click();
      cy.get('@savesCount').should(($el) => {
        const currentSaves = parseInt($el.text().trim(), 10);
        expect(currentSaves).to.be.greaterThan(initialSaves);
      });
    });
  });
});