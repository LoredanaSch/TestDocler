class ErrorPage {

    // visit() {
    //     cy.visit("http://uitest.duodecadits.com/error")
    // }

    errorButton() {
        return cy.get('[id=error]')

    }

}

export default ErrorPage;