describe('Login Tests', () => {
  it('Login Sucessfull', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
  })
  it('Login Fail', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('wrong@mail.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.get('.text-red-500')
  })
})