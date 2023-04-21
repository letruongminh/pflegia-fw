import RegisterPage from "../pom/pages/RegisterPage";
const data = require("../fixtures/data.json");

describe('REGISTRATION FLOWS', () => {
  it('Verify that a new account is created successfully when inputting all the fields', () => {
    const registerPage = new RegisterPage();
    registerPage.setup();
    registerPage.inputRegisterFormForEmployer(data["companyName"], data["firstName"], data["lastName"], data["email"], data["phoneNumber"], data["jobTitle"]);
  })

  it('Verify that a new account is created successfully when inputting the required fields', () => {
    const registerPage = new RegisterPage();
    registerPage.setup();
    registerPage.submitWithRequiredFields(data["companyName"], data["firstName"], data["lastName"], data["email"], data["phoneNumber"]);
  })

  it('Verify that errors are shown successfully when submiting an empty form', () => {
    const registerPage = new RegisterPage();
    registerPage.setup();
    registerPage.submitEmptyForm();
  })

  it("Verify that an error is shown when submiting invalid email", () => {
    const registerPage = new RegisterPage();
    registerPage.setup();
    registerPage.submitWithInvalidEmail(data["invalidEmail"]);
  })
})