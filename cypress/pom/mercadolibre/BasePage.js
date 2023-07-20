class BasePage{

    navigate(path= ''){
        
        cy.fixture("config.json").then((data)=>{
            cy.visit(`${data.url}${path}`)
        })
    };

    validarTitulo(){
        cy.fixture("confi.json").then((data)=>{
            cy.log(cy.title())
            cy.title().should('eq', data.titulo)
        })
    };
}

module.exports = new BasePage();