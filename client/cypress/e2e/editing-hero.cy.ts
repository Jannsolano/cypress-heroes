describe('Heroes', () => {
  it('Editing a Hero', () => {
    cy.visit('http://localhost:3000')
    cy.get('li > .undefined').click()
    cy.get('.modal-container > .open').contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.contains('Chapolin Colorado').closest('div').find('[data-cy="pencil"]').click()
    cy.get('[data-cy="priceInput"]').clear().type('90')
    cy.get('.bg-blue-700').eq(1).click()  
    
  })
})
