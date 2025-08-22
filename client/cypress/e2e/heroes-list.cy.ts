import 'cypress-file-upload'

describe('Heroes', () => {
  it.only('Heroes List', () => {
    cy.visit('http://localhost:3000')
    cy.get('li > .undefined').click()
    cy.get('.modal-container > .open').contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.contains('Goku')

  })
})

