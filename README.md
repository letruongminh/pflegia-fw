# AUTOMATED TEST FRAMEWORK FOR PFLEGIA PROJECT

## 1. Aims
I want to build a simple automated test framework to automate Register workflows, including postive and negative cases. This framework is also used to apply for Pflegia for the QA and Test Engineer. 

## 2. Application Under Test
### 2.1. Environment Details: 
* Staging Environment URL: https://pflegia-nx.vercel.app/for-employers
* Programming Language: Javascript
* Core: Cypress

### 2.2. Scenarios - Registration workflow
!-- Positive test cases
* Verify that a new account is created successfully when inputting all the fields
* Verify that a new account is created successfully when inputting the required fields

!-- Negative test cases
* Verify that errors are shown successfully when submiting an empty form
* Verify that an error is shown when submiting invalid email

## 3. Framework Details
- [ ] Automate fully all the given scenarios.
- [ ] Able to set up and run the tests in cross-browsers
- [ ] Able to set up and run the tests within CI pipeline - Github Workflow.
- [ ] All tests are refactored to become POM-based framework.
- [ ] Refactor the test to have a separate place to store the data

### 3.1. Common functions
| Pages  | Methods | Usage | Input |
| ------------- | ------------- | ------------- | ------------- |
| Base Page | visitLandingPage | Access Registration page for Employers | x |
| Base Page | acceptCookies | Accept all cookies before accessing data resources | x | 
| Base Page | setup | Set up the initial state of the environment before executing the test | x | 
| Register Page | inputCompanyName | Input the company name to the corresponding field | companyName |
| Register Page | inputContactPersonFirstName | Input the contact person first name to the corresponding field | contactPersonFirstname |
| Register Page | inputContactPersonLastName | Input the contact person last name to the corresponding field | contactPersonLastname |
| Register Page | inputEmail | Input the email to the corresponding field | email | 
| Register Page | inputPhoneNumber | Input the phone number to the corresponding field | phoneNumber | 
| Register Page | inputJobTitle | Input the job title to the corresponding field | jobTitle | 
| Register Page | consentToPolicies | Consent to the current policies of the company before being accepted to register a new account | x | 
| Register Page | inputRegisterFormForEmployer | Input the registration form with all the fields | x | 
| Register Page | submitWithRequiredFields | Input the registration form with mandatory fields | x | 
| Register Page | submitEmptyForm | Submit an empty registration form | x | 
| Register Page | submitWithInvalidEmail | Submit a registration form with invalid email | x | 

### 3.2. CI Pipelines

![image](https://user-images.githubusercontent.com/53706302/229240681-ba55e09c-9f07-4fae-9848-338b53070b09.png)

![image](https://user-images.githubusercontent.com/53706302/229240862-114d5bad-2977-48d4-a17c-d6d77ccecb7c.png)

Here is the general workflow of the pipeline:

![image](https://user-images.githubusercontent.com/53706302/229240742-7ab6de13-ed37-4ec8-a615-3ca2f61bca4a.png)

### 3.3. Page Objects Model
I refactor the framework based on Page Object Model so that it is scalable, reusable, and can be the template to develop futher: 

![image](https://user-images.githubusercontent.com/53706302/229240943-97ef8fb8-6ffa-49b5-8329-66d15fe94326.png)

![image](https://user-images.githubusercontent.com/53706302/229249939-1f3c1643-f172-4775-beae-86af7c0c417c.png)

### 3.4. How to setup and run the tests
1. Clone source code: `git clone "https://github.com/letruongminh/pflegia-fw.git"`
2. Trigger the test with this command: `yarn cypress open` to open running tool 
3. Trigger the test directly via git bash: `npx cypress run --spec "cypress/e2e/spec.cy.js"`

### 4. Possible Improvements
* Apply yarn lint to check coding convention and code coverage for test before merging to the codebase.
* Apply Docker to package the source for having a consistent development strategy within the development team.
