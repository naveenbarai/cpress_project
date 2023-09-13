describe('Login page', ()=>{
    it('Add login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //  cy.title().should('have', 'OrangeHRM')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.title().should('include', 'OrangeHRM')
        cy.get('img[src="/web/index.php/pim/viewPhoto/empNumber/7"]').click()
        cy.get('a[href="/web/index.php/auth/logout"]').click()
        
        
    });
})