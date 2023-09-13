describe('launch url' , ()=>{

it('app testing', ()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    //cy.viewport(1326,500)
   // cy.clearCookies()
    cy.contains('Plugins')
    cy.contains('plugins').click()
    cy.wait(200)
    cy.url().should('include' , '/Plugins')
    


    
})


})