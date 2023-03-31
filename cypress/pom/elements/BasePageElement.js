class BasePageElement {
    static elements = {
        acceptCookiesBtn: () => cy.get("button[data-testid='accept-cookies']"),
    }
}

module.exports = BasePageElement; 