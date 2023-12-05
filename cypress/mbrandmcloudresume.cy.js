//describe('mbrandmcloudresume', () => {

//(() => {
//        cy.visit("https://www.mbrandmcloudresume.com")
//    })
//
//    it('access the page', () => {
//        cy.request('https://mbrandmcloudresume.com')
//        cy.contains('Michael Brand Martinez')
//
//    });
//
//    it('click on Github button', () => {
//
//      cy.get('[href="https://github.com/mbm149"] > .fa').click()
//
//    });
//
//
//    it('click on linkedin button', () => {
//
//      cy.get('[href="https://www.linkedin.com/in/michael-brand-martinez-mbm/"] > .fa').click()
//    });
//
//    it('hover show Phone number', () => {
//
//      cy.get('.dropbtn > .fa').should('be.visible')
//cy.get('[href="https://www.linkedin.com/in/michael-brand-martinez-mbm/"] > .fa').click()
//    });
//
//
//    it('check the update visits ', () => {
//      cy.get('#counters').invoke('text').should('match', /^[0-9]*$/)
//
//    })
//
//    it('rotate text ', () => {
//      cy.get('[class="txt-rotate"]').invoke('text').should('match', /^[A-Z]*$/)
//
//    })
//
//    it('top navegation bar is visible', () => {
//
//      cy.get('.topnav').should('be.visible')
//
//    })
//
//
//    it('scroll to the bottom, and back to the center', () => {
//
//      cy.scrollTo('bottom')
//      cy.scrollTo('center')
//
//    });
//
//
//
//    it('check 404 page', () => {
//
//      cy.request({url: '/404', failOnStatusCode: false}).its('status').should('equal', 404)
//
//    });
//
//
//    it('footer have the correct information', () => {
//
//      cy.get('#footer > p').contains('Michael Brand Martinez')
//      cy.get('#footer > p').contains('(602)-6425855')
//cy.get('#footer > p').contains('mbm.25149@gmail.com')
//
//
//    });
//
//  })//
