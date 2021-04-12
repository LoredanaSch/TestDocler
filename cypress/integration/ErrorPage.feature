Feature: ErrorPage

    As a Docler user
    I want to access Error Page
    So that I can see the errors displayed

    Scenario: Check 404 HTTP response code
        Given The user accesses the Home page
        When The Home page is displayed
        And The user press on Error button
        Then The user expects to have 404 error