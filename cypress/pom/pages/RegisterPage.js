const RegisterPageElement = require("../elements/RegisterPageElement");
const BasePage = require("./BasePage");

class RegisterPage extends BasePage {
    inputCompanyName(companyName) {
        RegisterPageElement.elements.companyNameTxtField().type(companyName);
    }

    inputContactPersonFirstname(contactPersonFirstname) {
        RegisterPageElement.elements.contactPersonFirstnameTxtField().type(contactPersonFirstname);
    }

    inputContactPersonLastname(contactPersonLastname) {
        RegisterPageElement.elements.contactPersonLastnameTxtField().type(contactPersonLastname);
    }

    inputEmail(email) {
        RegisterPageElement.elements.emailTxtField().type(email);
    }

    inputPhoneNumber(phoneNumber) {
        RegisterPageElement.elements.phoneNumberTxtField().type(phoneNumber);
    }

    inputJobTitle(jobTitle) {
        RegisterPageElement.elements.jobTitle().type(jobTitle);
    }

    consentToPolicies() {
        RegisterPageElement.elements.consentCheckbox().click();
    }

    inputRegisterFormForEmployer(companyName, firstname, lastname, email, phoneNumber, jobTitle) {
        cy.get("form").within(() => {
            this.inputCompanyName(companyName);
            this.inputContactPersonFirstname(firstname);
            this.inputContactPersonLastname(lastname);
            this.inputEmail(email);
            this.inputPhoneNumber(phoneNumber);
            this.inputJobTitle(jobTitle);
            this.consentToPolicies();
            cy.root().submit();
        })
        RegisterPageElement.elements.successfulAlertbox().should("be.visible");
        RegisterPageElement.elements.successfulAlertboxContent().should("be.visible");
    }

    submitWithRequiredFields(companyName, firstname, lastname, email, phoneNumber) {
        cy.get("form").within(() => {
            this.inputCompanyName(companyName);
            this.inputContactPersonFirstname(firstname);
            this.inputContactPersonLastname(lastname);
            this.inputEmail(email);
            this.inputPhoneNumber(phoneNumber);
            this.consentToPolicies();
            cy.root().submit();
        })
        RegisterPageElement.elements.successfulAlertbox().should("be.visible");
    }

    submitEmptyForm() {
        cy.get("form").within(() => {
            this.consentToPolicies();
            cy.root().submit();
        });
        RegisterPageElement.elements.invalidCompanynameTxt().should("be.visible");
        RegisterPageElement.elements.invalidFirstnameTxt().should("be.visible");
        RegisterPageElement.elements.invalidLastnameTxt().should("be.visible");
        RegisterPageElement.elements.emptyEmailTxt().should("be.visible");
        RegisterPageElement.elements.invalidPhoneNumberTxt().should("be.visible");
    }

    submitWithInvalidEmail(invalidEmail) {
        cy.get("form").within(() => {
            this.consentToPolicies();
            this.inputEmail(invalidEmail)
            cy.root().submit();
        });
        RegisterPageElement.elements.invalidEmailTxt().should("be.visible");
    }
}

module.exports = RegisterPage; 