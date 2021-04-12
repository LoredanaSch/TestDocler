import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/PageObjects/HomePage'
import ErrorPage from '../../support/PageObjects/ErrorPage'

const homePage = new HomePage()
const errorPage = new ErrorPage()

Given('The user accesses the Home page', () => {
    homePage.visit()

})

When('The Home page is displayed', () => {
    homePage.visit()
    cy.wait(500)
    homePage.getContent().should('be.visible')
})

When('The user press on Error button', () => {
    errorPage.errorButton().click()
})

Then('The user expects to have 404 error', () => {
    cy.title().should('contain', "404")
    cy.get('h1').contains('404 Error: File not found :-(').should('be.visible')
})