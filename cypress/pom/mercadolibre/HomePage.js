
class HomePage {

    element={
        btnOferta : ()=> cy.get('.nav-menu-list').children().contains('Ofertas'),
        btnHistorial : ()=> cy.get('.nav-menu-list').children().contains('Historial'),
        btnCategorias :()=> cy.get('[data-js="nav-menu-categories-trigger"]'),
        inputBusqueda: ()=> cy.get('#cb1-edit')
    };
    

   

    clickBtnOferta(){
        this.element.btnOferta().should('be.visible').click() 
    }

    clickBtnHistorial(){
        this.element.btnHistorial().should('be.visible').click() 
    }

    clickBtnCategorias(){
        this.element.btnCategorias().should('be.visible').click()
    }

    pisicionMouseCategoria(){
        this.element.btnCategorias().trigger('mouseup', 5, 5)
    }
    
    busquedaInputHome(t){
        this.element.inputBusqueda().should('be.visible').type(`${t} {enter}`)
        
    }

    
}

module.exports = new HomePage();