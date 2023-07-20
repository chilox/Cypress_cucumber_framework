

class BusquedaPage{
    element={
        validadorBusqueda: ()=> cy.get('.ui-search-breadcrumb__title'),
        popUp: ()=> cy.get('.andes-button--transparent > .andes-button__content')
    }

    ValidarBusqueda(text){
        //this.element.validadorBusqueda().type('{pagedown}')
        this.element.validadorBusqueda().invoke('text').should('eq', text)
    }

    cliclbtnPopUp(){
        this.element.popUp().click()
    }
}

module.exports = new BusquedaPage();