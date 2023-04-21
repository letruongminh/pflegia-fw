import JobBoardPage from "../pom/pages/JobBoardPage";
const data = require("../fixtures/data.json");

describe('JOB BOARD FLOWS', () => {
    it('1. Verify that job is filtered by using 3 filters', () => {
        const jobBoardPage = new JobBoardPage();

        // user should be able to navigate to job board from home pafe
        jobBoardPage.setup();
        jobBoardPage.switchJobBoardPage();

        jobBoardPage.filterPostalCode(data["postalCode"]);
        cy.contains(data["postalCode"]).should("be.visible");

        jobBoardPage.filterPosition(data["position"]);
        jobBoardPage.filterFacilityType(data["facilityType"]);

    })

    it('3. Verify that no job is shown when only using one filter', () => {
        const jobBoardPage = new JobBoardPage(); 
        jobBoardPage.setup();
        jobBoardPage.switchJobBoardPage();

        // Use only postal code
        jobBoardPage.filterPostalCode(data["postalCode"]);
        jobBoardPage.verifyNoLocationResult();
        
        // Remove location filter
        jobBoardPage.removeLocationFilter();

        jobBoardPage.filterPosition(data["position"]);
        jobBoardPage.verifyNoPositionResult();
    })

    it('4. Verify that more filters can be selected from the left drawer menu once Filter button is clicked', () => {
        const jobBoardPage = new JobBoardPage(); 
        jobBoardPage.setup();
        jobBoardPage.switchJobBoardPage();

        jobBoardPage.filterPostalCode(data["postalCode"]);
        cy.contains(data["postalCode"]).should("be.visible");
        jobBoardPage.filterPosition(data["position"]);
        jobBoardPage.addAdditionalFilters();
    })

    it('2. 5. Verify that user is redirected to the job detail page from the job board when clicking on Mehr erfahren', () => {
        const jobBoardPage = new JobBoardPage(); 
        jobBoardPage.setup();
        jobBoardPage.switchJobBoardPage();

        jobBoardPage.filterPostalCode(data["postalCode"]);
        cy.contains(data["postalCode"]).should("be.visible");
        jobBoardPage.filterPosition(data["position"]);
        jobBoardPage.addAdditionalFilters();

        jobBoardPage.accessTargetJobDetails();
    })

    it('6. Verify that a registration prompt is shown when clicking on Interessiert mich as a not registered user', () => {
        const jobBoardPage = new JobBoardPage(); 
        jobBoardPage.setup();
        jobBoardPage.switchJobBoardPage();

        jobBoardPage.filterPostalCode(data["postalCode"]);
        cy.contains(data["postalCode"]).should("be.visible");
        jobBoardPage.filterPosition(data["position"]);
        jobBoardPage.addAdditionalFilters();
        jobBoardPage.clickInterestedButton();
        jobBoardPage.isSignUpLinkVisible();
    })
})