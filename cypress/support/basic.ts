class Basic {

    urls = {
        joanMedia: 'http://uitestingplayground.com/',
        qaBox: 'https://react-redux.realworld.io/#/login?_k=5jewux'
    }

    /**
     * visits a website depending on a param given
     * @param url 
     */
    goToPage(url: string) {
        switch (url) {
            case 'joan':
               cy.visit(this.urls.joanMedia) 
                break;
            case 'qaBox':
                cy.visit(this.urls.qaBox)
            default:
                break;
        }
    }

    loginToApp(login: string, password: string) {
        cy.get('input:eq(0)').type(login)
        cy.get('input').eq(1).type(password)
        cy.get('button').click()
    }
}

export const basic = new Basic()