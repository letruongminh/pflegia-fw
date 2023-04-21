const JobDetailsElement = require("../elements/JobDetailsElement");
const BasePage = require("./BasePage");

class JobDetailsPage extends BasePage {
    verifyJobTitle (jobTitle) {
        JobDetailsElement.elements.jobDetailTitle().should("equal", jobTitle)
    }
}

module.exports = JobDetailsPage;