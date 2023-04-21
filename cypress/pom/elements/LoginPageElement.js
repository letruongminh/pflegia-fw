class LoginPageElement {
    static elements = {
        emailTxtField: () => cy.get("input[name='email']"),
        passwordTxtField: () => cy.get("input[name='password']"),
        loginBtn: () => cy.get("button[type='submit']"),
        forgetPasswordLinkTxt: () => cy.contains("Passwort vergessen?"),
        registerLinkTxt: () => cy.get("a[role='alert']"),
        nonExistentEmailAlert: () => cy.contains("Es existiert kein Benutzer mit dieser E-Mail-Adresse. ")
    }
}

module.exports = LoginPageElement;