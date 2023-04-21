class BasePageElement {
    static elements = {
        acceptCookiesBtn: () => cy.get("button[data-testid='accept-cookies']"),
        loginBtn: () => cy.contains("Einloggen"),
        homePageMenu: () => cy.get("li[data-testid='link-home']"),
        jobBoardMenu: () => cy.get("li[data-testid='link-jobBoard']"),
        employerMenu: () => cy.get("li[data-testid='link-forEmployers']"),
        blogMenu: () => cy.get("li[datat-testid='link-blog']")
    }
}

module.exports = BasePageElement; 