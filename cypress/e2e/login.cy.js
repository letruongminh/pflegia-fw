import LoginPage from "../pom/pages/LoginPage";
const data = require("../fixtures/data.json");

describe('LOGIN FLOW', () => {
    it('Verify that cannot login with non-existent credentials', () => {
        const loginPage = new LoginPage();
        loginPage.setup();
        loginPage.switchLoginPage();
        loginPage.inputCredentials(data["nonExistentEmail"], data["password"]);
        loginPage.clickLoginBtn();
        cy.title().should('equal', 'Pflegia | Anmelden');
        loginPage.isRegisterButtonShown();
    })
})