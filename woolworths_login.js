describe('woolworths login', () => {
    it('visits the homepage', () => {
      cy.visit('https://www.woolworths.com.au/');
  
      cy.get('[class="coreHeader-profile coreHeader-loginMobileProfile"]').click(88,70, { force: true });
      cy.get('input[name=Email]').type('cypresstest22@gmail.com')
      cy.get('input[name=Password]').type('123456{enter}')
      cy.get('[class="primary-legacy m full-width mobile-full-width"]').click({ force: true })
      cy.visit('https://www.woolworths.com.au/');
      
      
    })
  })