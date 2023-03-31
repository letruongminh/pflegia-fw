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
[] Automate fully all the given scenarios.
[] Able to set up and run the tests in cross-browsers
[] Able to set up and run the tests within CI pipeline - Github Workflow.
[] All tests are refactored to become POM-based framework.
[] Refactor the test to have a separate place to store the data
