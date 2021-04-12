import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/PageObjects/HomePage'
import FormPage from '../../support/PageObjects/FormPage'

const homePage = new HomePage()
const formPage = new FormPage()
let usernamesList = ['John', 'Sophia', 'Charlie', 'Emily']
const index = Math.floor(Math.random() * usernamesList.length)
const username = usernamesList[index]

Given('The user accesses the Form page', () => {
    formPage.visit()

})

When('The Form page is displayed', () => {
    cy.wait(2000)
    const formContent = homePage.getContent()
    formContent.should('be.visible')
})

When('The user clicks on Home button', () => {
    homePage.homeButton().click()

})

When('The user clicks on UI testing button', () => {
    homePage.uiTestingButton().click()

})

When('The user fill a <value> on the input form', () => {
    formPage.inputBox().type(username)
})

When('The user press on submit button', () => {
    formPage.submitButton().click()
})

Then('The user expects to see the Form page title', () => {
    const formTitle = homePage.getTitle()
    formTitle.should('equal', 'UI Testing Site')
})

Then('The user expects to see the logo', () => {
    const formLogo = homePage.getLogo()
    formLogo.should('be.visible')
})

Then('The user expects to be redirected to Home page', () => {
    cy.url().should('equal', 'http://uitest.duodecadits.com/')
})

Then('The user expects that Home button has active status', () => {
    homePage.homeButton().parent().should('have.class', 'active')
})

Then('The user expects to be redirected to Home page', () => {
    cy.url().should('equal', 'http://uitest.duodecadits.com/')
})

Then('The user expects that a form with one input and one submit button to be displayed', () => {
    formPage.getForm().find('input').should('have.length', 1)
    formPage.getForm().find('button').should('have.length', 1)
    formPage.getForm().contains('Go!').should('be.visible')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'You name here...')
    cy.get('input').should('be.visible')
})

Then('The user expects to see "Hello <value>!" text on the page', () => {
    cy.url().should('equal', `http://uitest.duodecadits.com/hello.html?myName=${username}`)
    cy.contains(`Hello ${username}!`)
})