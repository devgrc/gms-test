/// <reference types="cypress"/>


describe('Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araújo')
    cy.get('#signup-email').type('teste@125.com')
    cy.get('#signup-phone').type('5433223423')
    cy.get('#signup-password').type('Tete@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})