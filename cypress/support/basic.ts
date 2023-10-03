class Basic {

    url = {
        joanMedia: 'http://uitestingplayground.com/',
        qaBox: 'https://react-redux.realworld.io/#/login?_k=5jewux'
    }

    /**
     * visits a website depending on param given
     * @param url 
     * @param suburl
     */
    goToPage(url: string, suburl = '') {
        switch (url) {
            case 'joan':
               cy.visit(this.url.joanMedia + suburl, {timeout: 80000}) 
                break;
            case 'qaBox':
                cy.visit(this.url.qaBox)
            default:
                break;
        }
    }

    logIn(login: string, password: string) {
        cy.get('input:eq(0)').type(login)
        cy.get('input').eq(1).type(password)
        cy.get('button').click()
    }

    /**
     * clicks on selected element with text
     * @param selector 
     * @param text
     */
    clickElement(selector, text) {
        cy.get(selector).contains(text).click()
    }

    /**
     * gets input and types text
     * @param selector 
     * @param text
     */
    typeText(selector, text) {
            cy.get(selector).clear().type(text)
        }
}

export const basic = new Basic()