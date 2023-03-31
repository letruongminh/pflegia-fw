const BasePageElement = require("../elements/BasePageElement");
const env = require("../../fixtures/env.json");

class BasePage {
    visitLandingPage() {
        cy.visit(env["staging"]);
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