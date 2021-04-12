Feature: FormPage

    As a Docler user
    I want to access Form Page
    So that I can find out more information about the company


    Background:
        Given The user accesses the Form page
        When The Form page is displayed


    Scenario: Check HomePage Title
        Then The user expects to see the Form page title


    Scenario: Check FormPage Logo
        Then The user expects to see the logo

    Scenario: Check navigation from Form page to Home page
        And The user clicks on Home button
        Then The user expects to be redirected to Home page

    Scenario: Check Home button active status
        And The user clicks on Home button
        Then The user expects that Home button has active status

    Scenario: Check navigation from Form page to UI testing page
        And The user clicks on UI testing button
        Then The user expects to be redirected to Home page

    Scenario: Check if the form has one input and one submit button
        Then The user expects that a form with one input and one submit button to be displayed

    Scenario: Check form value
        And The user fill a <value> on the input form
        And The user press on submit button
        Then The user expects to see "Hello <value>!" text on the page