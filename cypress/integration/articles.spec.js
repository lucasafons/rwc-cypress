/// <reference types="cypress" />

import articles from '../support/pages/articles'

context("Artigos", () => {
  beforeEach(() => {
    //Preparação
    cy.bgLogin();
    articles.acessarFormularioDeNovaPublicacao();
  })
  
  it("Criar um novo artigo", () => {
    //Ação
    articles.preencherFormulario();
    articles.submeterPublicacao();
    //Verificação
    articles.verificarSeAPublicacaoFoiCriadaComSucesso();

    // AAA -> Arrange Act Assert
    // PAV -> Preparação Ação Verificação/validação
  });
});
