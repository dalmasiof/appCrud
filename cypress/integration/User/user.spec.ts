describe('Navigate to User', () => {
  it('Visits the user cad page', () => {
    cy.visit('User/create')
  })

  it('should fill the form and submit', () => {
    cy.get('#labelUser').contains('Create user')

    cy.get('input[formcontrolname="name"]').type('Dalmasio')
    cy.get('input[formcontrolname="email"]').type('dalmasiof@gmail.com')
    cy.get('input[formcontrolname="cpf"]').type('48495628848')
    cy.get('input[formcontrolname="password"]').type('Masinho10')
    cy.get('input[formcontrolname="confirmPassword"]').type('Masinho10')
    cy.get('input[formcontrolname="name"]').focus()
    
    cy.get('button[type]').click()
  })
})
