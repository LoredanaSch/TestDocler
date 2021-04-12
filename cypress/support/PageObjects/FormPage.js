class FormPage {

    visit() {
        cy.visit("http://uitest.duodecadits.com/form.html")
    }

    formButton() {
        return cy.get('[id=form]')
    }

    getForm() {
        return cy.get('[id=hello-form]')
    }

    inputBox() {
        return cy.get('[id=hello-input]')
    }

    submitButton() {
        return cy.get('[id=hello-submit]')
    }

}

export default FormPage;