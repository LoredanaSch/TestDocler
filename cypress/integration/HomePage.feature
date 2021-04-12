Feature: HomePage

    As a Docler user
    I want to access Home Page
    So that I can find out more information about the company


    Background:
        Given The user accesses the Home page
        When The Home page is displayed


    Scenario: Check HomePage Title
        Then The user expects to see the Home page title


    Scenario: Check HomePage Logo
        Then The user expects to see the logo

    Scenario: Check navigation from Home page to Form page
        And The user clicks on Form button
        Then The user expects to be redirected to Form page

    Scenario: Check Form button active status
        And The user clicks on Form button
        Then The user expects that Form button has active status

    Scenario: Check navigation from Home page to UI testing page
        And The user clicks on UI testing button
        Then The user expects to be redirected to Home page

    Scenario: Check specific text to be visible
        Then The user expects to see "Welcome to the Docler Holding QA Department" as page title
        And The user expects to see "This site is dedicated to perform some exercises and demonstrate automated web testing." as paragraph
