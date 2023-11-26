import { faker } from "@faker-js/faker"
const credenciais = require('../../fixtures/perfil.json')


export const myAccountPage = {

    fill_register_form() {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    },

    fill_name_details_form() {
        let firstName = faker.name.firstName()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('#account_display_name').type(firstName)
        cy.get('.woocommerce-Button').click()
    },

    fill_already_existent_user() {
        let lastName = faker.name.lastName()
        cy.get('#reg_email').type(credenciais.usuario)
        cy.get('#reg_password').type(lastName)
        cy.get(':nth-child(4) > .button').click()
    }
}
