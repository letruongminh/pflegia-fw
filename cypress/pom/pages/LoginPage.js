const LoginPageElement = require("../elements/LoginPageElement");
const BasePage = require("./BasePage");

class LoginPage extends BasePage {
    inputCredentials(email, password) {
        LoginPageElement.elements.passwordTxtField().type(password);
        LoginPageElement.elements.emailTxtField().type(email);
    }

    clickLoginBtn() {
        LoginPageElement.elements.loginBtn().click();
    }

    isRegisterButtonShown() {
        LoginPageElement.elements.registerLinkTxt().should("be.visible");
        LoginPageElement.elements.nonExistentEmailAlert().should("be.visible");
    }
}

module.exports = LoginPage; 