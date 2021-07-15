const faker = require("faker");

const el = require("./elements").ELEMENTS;

class Cadastro {
  acessarTelaRegistro() {
    cy.visit(el.linkTelaRegistro);
  }
  
  preencherFormulario() {
    cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName());
    cy.get(el.inputEmail).type(faker.internet.email());
    cy.get(el.inputPassword).type(12345678);
  }

  submeterFormulario() {
  cy.get(el.buttonSubmit).click();
  }
}

export default new Cadastro();
