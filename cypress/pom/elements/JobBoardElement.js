class JobBoardElement {
    static elements = {
        postalCodeTxt: () => cy.get("input[data-testid='is-postal-input']"),
        positionList: () => cy.get("input[data-testid='dropdown-input-position']"),
        facilityTypeList: () => cy.get("input[placeholder='Einrichtungstyp auswählen']"),
        countFilter: () => cy.get("button[data-testid='filter-button-with-count']"),
        jobShown: () => cy.contains("Klick "),
        noResultLocationAssertion: () => cy.contains("Keine Ergebnisse gefunden! Ändere Deine Filter"),
        noResultPositionAssertion: () => cy.contains("Du hast keinen Standort ausgewählt."),
        removeFilterLocationButton: () => cy.get("button[data-testid='remove-filter-Location']"),
        workingHoursMode: () => cy.get("button[data-testid='sidebar-filter-header-employment']"),
        fulltimeMode: () => cy.contains("Vollzeit"),
        saveFilterButton: () => cy.get("button[data-testid='save-sidebar-filters']"),
        learnMoreButton: () => cy.get("a[data-testid='learn-more-position-link-default']"),
        jobDetailsBoard: () => cy.get("a[data-testid^='job-card-title-default']"),
        imInterestedButton: () => cy.contains("Interessiert mich"),
        signUpLinkText: () => cy.get("a[data-testid='sign-up-link']")
    }
}

module.exports = JobBoardElement;