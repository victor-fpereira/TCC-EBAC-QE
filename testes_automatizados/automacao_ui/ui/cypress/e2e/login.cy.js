/// <reference types="cypress" />

const credenciais = require('../fixtures/perfil.json')
const minha_conta = require('../support/pages/my_account.js')

describe('Detalhes da conta', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  it('Recuperação de Senha - Cenário Positivo', () => {
    cy.get('.lost_password > a').click()
    cy.get('#user_login').type(credenciais.usuario)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'O e-mail de redefinição de senha foi enviado.')
  })


  it('Recuperação de Senha - Cenário Negativo (E-mail Inválido)', () => {
    cy.get('.lost_password > a').click()
    cy.get('#user_login').type(credenciais.usuario_invalido)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Nome de usuário ou e-mail inválido.')
  })

  it('Registro de Novo Usuário - Cenário Positivo', () => {
    cy.log('Registra novo usuário')
    cy.visit('my-account')
    minha_conta.myAccountPage.fill_register_form()
    minha_conta.myAccountPage.fill_name_details_form()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })

  it('Registro de Novo Usuário - Cenário Negativo (E-mail Já Registrado)', () => {
    cy.log('Registra usuário já existente')
    cy.visit('my-account')
    minha_conta.myAccountPage.fill_already_existent_user()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
  })

})
