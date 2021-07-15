const el =  require('./elements').ELEMENTS

class Login {

    acessarLogin() {
    //acessar a página de login
    cy.visit("login");
    }

    preencherFormulario() {
    //preencher campos
    cy.get(el.inputEmail).type(Cypress.config().user.email);
    cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submeterFormulario() {
    //submeter
    cy.get(el.buttonSubmit).click();
    }
}

export default new Login();