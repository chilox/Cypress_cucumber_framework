

class OfertaPage{

    validarUrl(){
        cy.url().should('include', '/ofertas')
    }
}

module.exports = new OfertaPage()