/// <reference types="cypress" />

const faker = require('faker')

const el =  require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {
  acessarFormularioDeNovaPublicacao() {
    cy.get(el.linkNovaPublicacao).click();
  }

  preencherFormulario() {
    cy.get(el.inputTitle).type('Agilizei title');
    cy.get(el.inputDescription).type('Aulas cria');
    cy.get(el.textareaContent).type(faker.lorem.paragraph());
    cy.get(el.inputTags).type('cypress')  
  }

  submeterPublicacao() {
    cy.get(el.buttonSubmit).click();   

  }
  verificarSeAPublicacaoFoiCriadaComSucesso() {
    cy.wait(`@${Routes.as.postArticles}`).then(({response}) => {
      expect(response.statusCode).to.eq(200)
    })

    cy.wait(`@${Routes.as.getTitle}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });

    cy.wait(`@${Routes.as.getComments}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  }

  }


export default new Articles();