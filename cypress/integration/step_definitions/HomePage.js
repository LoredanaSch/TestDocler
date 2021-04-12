import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/PageObjects/HomePage'
import FormPage from '../../support/PageObjects/FormPage'

const homePage = new HomePage()
const formPage = new FormPage()

Given('The user accesses the Home page', () => {
    homePage.visit();
})

When('The Home page is displayed', () => {
    cy.wait(2000)
    homePage.getContent().should('be.visible')
})

When('The user clicks on Form button', () => {
    formPage.formButton().click()

})

When('The user clicks on UI testing button', () => {
    homePage.uiTestingButton().click()

})

Then('The user expects to see the Home page title', () => {
    homePage.getTitle().should('equal', 'UI Testing Site')
})

Then('The user expects to see the logo', () => {
    homePage.getLogo().should('be.visible')
})

Then('The user expects to be redirected to Form page', () => {
    cy.url().should('equal', 'http://uitest.duodecadits.com/form.html')
})

Then('The user expects that Form button has active status', () => {
    formPage.formButton().parent().should('have.class', 'active')
})

Then('The user expects to be redirected to Home page', () => {
    cy.url().should('equal', 'http://uitest.duodecadits.com/')
})

Then('The user expects to see "Welcome to the Docler Holding QA Department" as page title', () => {
    cy.get('h1').contains('Welcome to the Docler Holding QA Department').should('be.visible')
})

Then('The user expects to see "This site is dedicated to perform some exercises and demonstrate automated web testing." as paragraph', () => {
    cy.get('p').contains('This site is dedicated to perform some exercises and demonstrate automated web testing.').should('be.visible')
})

