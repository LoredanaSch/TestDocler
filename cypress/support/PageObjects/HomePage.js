class HomePage {


    visit() {
        cy.visit("http://uitest.duodecadits.com/")
    }

    getTitle() {
        return cy.title()
    }

    getLogo() {
        return cy.get('[id=dh_logo]')
    }

    homeButton() {
        return cy.get('[id=home]')
    }

    uiTestingButton() {
        return cy.get('[id=site]')
    }

    getContent() {
        return cy.get('[class=container]')
    }

}

export default HomePage;