const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const homePage = require('../../../pom/mercadolibre/HomePage');
const basePage = require('../../../pom/mercadolibre/BasePage');
const busquedaPage = require('../../../pom/mercadolibre/BusquedaPage');



Given("Ingreso a la home de la pagina", () => {
    basePage.navigate()
});

When("validar que estemos en la home", () => {
    if (!basePage.validarTitulo) {
        cy.log('Error')
    } else {
        cy.log('estamos en la home')
    }

});

Given("Ingresar a la sección Ofertas", () => {
    homePage.clickBtnOferta()

})

Given('Ingresar a la sección Historial', () => {
    homePage.clickBtnHistorial()
})

Given('Desplegar la sección Categoria', () => {
    homePage.pisicionMouseCategoria()

})

Given(`Ingresamos el producto {string}`, (producto) => {
    homePage.busquedaInputHome(producto)

})

Then('Validamos se realice la busqueda {string}', (producto) => {
    busquedaPage.cliclbtnPopUp()
    busquedaPage.ValidarBusqueda(producto)
    
})