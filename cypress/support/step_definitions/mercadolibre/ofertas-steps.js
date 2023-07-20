const { Then } = require('@badeball/cypress-cucumber-preprocessor')
const ofertaPage = require('../../../pom/mercadolibre/OfertaPage')

Then("Validar que nos encontramos en sección Ofertas", ()=>{
    ofertaPage.validarUrl()
})