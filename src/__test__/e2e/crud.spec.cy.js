/* eslint-disable no-undef */
import * as EmployeeFixture from "../../../cypress/fixtures/crud-operation.json";
import { faker } from "@faker-js/faker";
import { getRandomNumber } from "../utils/helper";
import { includes } from "lodash";
describe("Validate the crud operations of employee management", () => {
  //{constructed a script so that no it block is dependent on any other block.}

  beforeEach(() => {
    cy.visit("/");
    cy.get(EmployeeFixture.selectors.addEmployeeButton)
      .should("be.visible")
      .click();
  });
  it("TC-01 User should be able to add new employee details", () => {
    const employeeName = faker.lorem.words(2);
    const salary = getRandomNumber(10000, 400000);
    const contactNumber = faker.string.numeric(10);
    const status = "active";
    let values = [
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status,
    ];
    // addEmployee  => Custom command
    cy.addEmployee(
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status
    );
    cy.get(EmployeeFixture.selectors.submitButton).click();
    //  Custom Commnads table valudation
    cy.tableValidation(
      EmployeeFixture.selectors.table,
      EmployeeFixture.selectors.td,
      6,
      values
    );
  });
  it("TC-02 User should be able to edit the existing employee", () => {
    const employeeName = faker.person.firstName("female");
    const salary = getRandomNumber(10000, 400000);
    const contactNumber = faker.string.numeric(10);
    const status = "active";
    const updatedEmployeeName = faker.person.firstName("female");
    const updatedSalary = getRandomNumber(50000, 100000);

    let values = [
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status,
    ];
    let updatedValues = [
      updatedEmployeeName,
      EmployeeFixture.data.dob,
      updatedSalary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status,
    ];
    // addEmployee  => Custom command
    cy.addEmployee(
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status
    );
    cy.get(EmployeeFixture.selectors.submitButton).click();
    //  Custom Commnads table valudation
    cy.tableValidation(
      EmployeeFixture.selectors.table,
      EmployeeFixture.selectors.td,
      6,
      values
    );
    cy.wait(2000,{log:false})
    cy.get(EmployeeFixture.selectors.table).each((el) => {
      let text = el.find("td").text();
      if (includes(text, employeeName)) {
        cy.wrap(el).find("a").click({ force: true });
        cy.get(EmployeeFixture.selectors.formTitle).should(
          "contain",
          EmployeeFixture.data.UpdateEmployeeText
        );
        cy.get(EmployeeFixture.selectors.nameField)
          .clear()
          .should("be.empty")
          .type(updatedEmployeeName);
        cy.get(EmployeeFixture.selectors.salaryField)
          .clear()
          .should("be.empty")
          .type(updatedSalary);
        cy.get(EmployeeFixture.selectors.submitButton).click();
        cy.tableValidation(
          EmployeeFixture.selectors.table,
          EmployeeFixture.selectors.td,
          6,
          updatedValues
        );
      }
    });
  });

  it("TC-03 User should be able to delete the employee details", () => {
    const employeeName = faker.person.firstName("female");
    const salary = getRandomNumber(10000, 400000);
    const contactNumber = faker.string.numeric(10);
    const status = "active";
    let values = [
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status,
    ];
    // addEmployee  => Custom command
    cy.addEmployee(
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status
    );
    cy.get(EmployeeFixture.selectors.submitButton).click();
    //  Custom Commnads table valudation
    cy.tableValidation(
      EmployeeFixture.selectors.table,
      EmployeeFixture.selectors.td,
      6,
      values
    );
    cy.wait(2000, { log: false });
    cy.get(EmployeeFixture.selectors.table).each((el) => {
      let text = el.find("td").text();
      if (includes(text, employeeName)) {
        cy.wrap(el).find("button").click({ force: true });
        cy.get("body")
          .contains(employeeName, { log: false })
          .should("not.exist");
      }
    });
  });

  it("TC-04 User should be able to update the status of the employee", () => {
    const employeeName = faker.person.firstName("female");
    const salary = getRandomNumber(10000, 400000);
    const contactNumber = faker.string.numeric(10);
    const status = "active";
    const updatedStatus = "inactive";
    let values = [
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      updatedStatus,
    ];
    // addEmployee  => Custom command
    cy.addEmployee(
      employeeName,
      EmployeeFixture.data.dob,
      salary,
      EmployeeFixture.data.joiningDate,
      EmployeeFixture.data.releivingDate,
      contactNumber,
      status
    );
    cy.get(EmployeeFixture.selectors.submitButton).click();
    //  Custom Commnads for table validation
    cy.wait(2000, { log: false });
    cy.get(EmployeeFixture.selectors.table).each((el) => {
      let text = el.find("td").text();
      if (includes(text, employeeName)) {
        cy.wrap(el).find("a").click({ force: true });
        cy.get(EmployeeFixture.selectors.formTitle).should(
          "contain",
          EmployeeFixture.data.UpdateEmployeeText
        );
        cy.get(EmployeeFixture.selectors.statusField).select(updatedStatus);
        cy.get(EmployeeFixture.selectors.submitButton).click();
        cy.tableValidation(
          EmployeeFixture.selectors.table,
          EmployeeFixture.selectors.td,
          6,
          values
        );
      }
    });
  });
  it("TC-05 User should not be able to add employee with invalid data(Empty field)", () => {
    cy.get(EmployeeFixture.selectors.nameField).clear().should("be.empty");
    cy.get(EmployeeFixture.selectors.birthDate).clear().should("be.empty");
    cy.get(EmployeeFixture.selectors.salaryField).clear().should("be.empty");
    cy.get(EmployeeFixture.selectors.relievingDateField)
      .eq(1)
      .clear({ force: true })
      .should("be.empty");
    cy.get(EmployeeFixture.selectors.relievingDateField)
      .last()
      .clear({ force: true })
      .should("be.empty");
    cy.get(EmployeeFixture.selectors.contactField)
      .clear({ force: true })
      .should("be.empty");
    cy.get(EmployeeFixture.selectors.submitButton).click();
    cy.get(EmployeeFixture.selectors.submitButton)
      .first()
      .should("be.visible")
      .and("contain", EmployeeFixture.data.fieldErrorMsg);
  });
});
