const BasePageElement = require("../elements/BasePageElement");

class BasePage {
    visitLandingPage() {
        cy.visit('https://pflegia-nx.vercel.app/for-employers');
    }

    acceptCookies() {
        BasePageElement.elements.acceptCookiesBtn().click();
    }

    setup() {
        this.visitLandingPage(); 
        this.acceptCookies();
    }
}

module.exports = BasePage;