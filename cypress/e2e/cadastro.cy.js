/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `antony${Date.now()}@teste.com`
    cy.preencherCadastro('Antony', 'Garcia', email, '123454343433', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inv', () => {
    cy.preencherCadastro('Antony07', 'Garcia', 'antony@teste.com', '123454343433', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')

  })
})