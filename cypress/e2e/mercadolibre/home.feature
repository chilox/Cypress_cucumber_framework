Feature: Redirección a secciones desde Home

    Vamos a estar realizando la redirección a las diversas secciones que contienen la web

    Background: Ingreso a la web
        Given Ingreso a la home de la pagina
        When validar que estemos en la home

    Scenario: Validar redirección a sección Ofertas   @ignore     
        Given Ingresar a la sección Ofertas
        Then Validar que nos encontramos en sección Ofertas


    Scenario: Validar la redirección a sección Historial        
        Given Ingresar a la sección Historial


    Scenario: Validar redireccioón a sección Categoria
        Given  Desplegar la sección Categoria

    
    Scenario: Scenario: Realizar busqueda desde la home
        Given Ingresamos el producto "Zapatos"      
        Then Validamos se realice la busqueda "Zapatos"

       