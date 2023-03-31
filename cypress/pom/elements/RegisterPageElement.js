class RegisterPageElement {
    static elements = {
        companyNameTxtField: () => cy.get("input#companyName"),
        contactPersonFirstnameTxtField: () => cy.get("input#contactPersonFirstName"),
        contactPersonLastnameTxtField: () => cy.get("input#contactPersonSurname"),
        emailTxtField: () => cy.get("input#email"),
        phoneNumberTxtField: () => cy.get("input#phoneNumber"),
        jobTitle: () => cy.get("input#jobTitle"),
        consentCheckbox: () => cy.get("input#checked"),
        successfulAlertbox: () => cy.get("[data-testid='toast-container']"),
        invalidCompanynameTxt: () => cy.contains("Firmenname ist erforderlich"),
        invalidFirstnameTxt: () => cy.contains("Vorname ist ungültig"),
        invalidLastnameTxt: () => cy.contains("Nachname ist ungültig"),
        emptyEmailTxt: () => cy.contains("Email ist erforderlich"),
        invalidPhoneNumberTxt: () => cy.contains("Ungültige Telefonnummer"),
        invalidEmailTxt: () => cy.contains("Diese Email-Adresse ist ungültig"),
    }
}

module.exports = RegisterPageElement; 