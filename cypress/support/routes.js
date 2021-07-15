class Routes {
  
  as = {
    postArticles: 'POSTArticles',
    getTitle: 'GETArticlesTitle',
    getComments: 'GETArticlesTitleComments'
  }
  
  init() {
    cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
    cy.intercept('GET', '**/api/articles/agilizei-title-**').as(this.as.getTitle);
    cy.intercept('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getComments);
  }
}

export default new Routes();
