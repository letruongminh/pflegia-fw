const BasePageElement = require("../elements/BasePageElement");
const env = require("../../fixtures/env.json");

class BasePage {
    visitLandingPage() {
        cy.visit(env["staging"]);
    }

    acceptCookies() {
        BasePageElement.elements.acceptCookiesBtn().click();
    }

    switchLoginPage() {
        BasePageElement.elements.loginBtn().click();
    }

    switchJobBoardPage() {
        BasePageElement.elements.jobBoardMenu().click();
    }

    getTextFromElement(selector) {
        return cy.get(`${selector}`).invoke("text");
    }

    setup() {
        this.visitLandingPage();
        this.acceptCookies();
    }
}

module.exports = BasePage;