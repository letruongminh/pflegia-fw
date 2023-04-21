class JobDetailsElement {
    static elements = {
        jobDetailTitle: () => cy.get("h2[data-testid='job-detail-title']")
    }
}

module.exports = JobDetailsElement;