/// <reference types="Cypress" />

describe ('Acessando a página Feedz', function(){
  beforeEach (function(){
  cy.visit('http://localhost:8080/agendamento/')

  })

  it (' Verifica o Título da guia da aplicação', function(){
    cy.title(). should('be.equal', 'Login')
 })
  
  it ('Preenche os campos: login e senha', function(){
  
  cy.get('#username').type('admin',{delay:0})
  cy.get('#password ').type('teste10',{delay:0})
  cy.get('#login-button').click()
  cy.get('.healsMenuButtonIcon').click ()
  
  
  cy.get('[data-menu-id="2"]').click()
  cy.wait(2000)
  cy.get('[turl="/agendamento/genesis/Inclusao!modoAgendamento.action"]').click()
  cy.get('#buscaPaciente > .richselect > table > tbody > tr > :nth-child(1) > .theme-bg6').type('paciente teste').click()
  cy.wait(2000)
  cy.get('.richselect-option-selected > .richselect-option-text > .richselect-option-label > p').click()
  
 // cy.get('.richselect-option-label > p') .click()
  cy.wait(5000)
  cy.get('#botaoNovaRequisicao  ') .click()
  
  cy.get('input[ class="optionValue"][value="2"]').wait(5000).click({force: true})
  cy.get('#planoSaudeId > .richselect > table > tbody > tr > :nth-child(1) > .theme-bg6') .type('particular')
  cy.get('[tgroup="Planos Particulares"] > .richselect-option-text > .richselect-option-label') .click()
  cy.get('#btnSalvarPlanoSaude > .button-content').click()
  cy.wait(4000)
  cy.get('#autocompleteInserirMedicoWrapper > .ticon-container > .ticon-profissional-saude').click( {force: true})
  cy.wait(3000)
  cy.get('#produtoAutocomplete > .richselect > table > tbody > tr > :nth-child(1) > .theme-bg6') .type('DER').click()
  cy.get('#produtoAutocomplete_richselect_dropdown > :nth-child(3) > .richselect-option-text > .richselect-option-label').click()
 
  cy.wait(4000)
  //cy.get('#anonymous_element_318 > .selectedOptionsContainer > .showOptionsButtom > span.ticon > .ticon').click()
  cy.get('#anonymous_element_322 > .selectedOptionsContainer > .option > .optionContent').click()
  cy.get('#anonymous_element_322 > .availableOptionsContainer > .selectionToolsbar > .autocompleteField').type('true').click({force: true})
  cy.get('#anonymous_element_322> .availableOptionsContainer > .contentContainer > .content > :nth-child(1)').click()
  cy.wait(5000)
  cy.get('#btn_salvarDirty > .button-content').click()
  
  cy.wait(4000)
  cy.get('#bt_abrirModalPreferenciaLocal > .button-content').click()
  cy.wait(4000)
  cy.get('[tvalue="no_24"] > :nth-child(1) > .button') .click() 
  cy.get('[tvalue="18"] > .node-selector').click()
  cy.wait(5000)
  cy.get('#btn_confirmarBuscarHorarios > .button-content') .click()
  cy.wait(4000)
  cy.get('#btnSalvarRequisicao > .button-content') .click()
  cy.wait(4000)
  cy.get('p > a').click()


  

//cy.get('.node last preferenciaLocalTreeNode').click()

 //cy.get('optionContent dontCloseMePlease').select('Call Center')
  //cy.select('.theme-selected > .optionContent') .select(1)
  //cy.get('#buscaPaciente_richselect_dropdown').click()
 
    


    //cy.get('select#name option:selected')
   })
   
 
  })
  

 


