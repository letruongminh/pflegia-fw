const JobBoardElement = require("../elements/JobBoardElement");
const JobDetailsElement = require("../elements/JobDetailsElement");
const data = require("../../fixtures/data.json");
const BasePage = require("./BasePage");

class JobBoardPage extends BasePage {
    filterPostalCode(postalCode) {
        JobBoardElement.elements.postalCodeTxt().click();
        JobBoardElement.elements.postalCodeTxt().type(postalCode);
        cy.get(`p[data-testid='location-${postalCode}']`).click();
    }

    filterPosition(position) {
        JobBoardElement.elements.positionList().click();
        cy.get(`button[data-testid='dropdown-option-${position}']`).click();
    }

    filterFacilityType(facilityType) {
        JobBoardElement.elements.facilityTypeList().click();
        cy.contains(`${facilityType}`).click();
    }

    verifyIfJobsAreShown() {
        JobBoardElement.elements.jobShown().should("be.visible");
    }

    verifyNoLocationResult() {
        JobBoardElement.elements.noResultLocationAssertion().should("be.visible");
    }

    verifyNoPositionResult() {
        JobBoardElement.elements.noResultPositionAssertion().should("be.visible");
    }

    removeLocationFilter() {
        JobBoardElement.elements.removeFilterLocationButton().click();
    }

    addAdditionalFilters() {
        JobBoardElement.elements.countFilter().click();
        JobBoardElement.elements.workingHoursMode().click();
        JobBoardElement.elements.fulltimeMode().click();
        JobBoardElement.elements.saveFilterButton().click();
        JobBoardElement.elements.fulltimeMode().should("be.visible");
    }

    accessTargetJobDetails() {
        JobBoardElement.elements.learnMoreButton().click();
        JobDetailsElement.elements.jobDetailTitle().invoke('text').should('eq', data["targetJobTitle"]);
    }

    clickInterestedButton() {
        JobBoardElement.elements.imInterestedButton().click();
    }

    isSignUpLinkVisible() {
        JobBoardElement.elements.signUpLinkText().should('be.visible');
    }
}

module.exports = JobBoardPage; 