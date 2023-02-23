
Cypress.Commands.add ('fillMandatoryFieldsAndSubmit', function(){
  cy.get('#username').type('admin',{delay:0})
  cy.get('#password ').type('teste10',{delay:0})
  cy.get('#login-button').click()
  cy.get('.healsMenuButtonIcon').click ()
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })