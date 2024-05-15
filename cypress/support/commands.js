/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
import * as EmployeeFixture from "../../cypress/fixtures/crud-operation.json";
Cypress.Commands.add(
  "addEmployee",
  (
    employeeName,
    employeeDob,
    salary,
    joiningDate,
    releivingDate,
    contactNumber,
    status
  ) => {
    cy.get(EmployeeFixture.selectors.nameField)
      .clear()
      .should("be.empty")
      .type(employeeName);
    cy.get(EmployeeFixture.selectors.birthDate)
      .clear()
      .should("be.empty")
      .type(employeeDob);
    cy.get(EmployeeFixture.selectors.salaryField)
      .clear()
      .should("be.empty")
      .type(salary);
    cy.get(EmployeeFixture.selectors.relievingDateField)
      .eq(1)
      .clear({ force: true })
      .should("be.empty")
      .type(joiningDate);
    cy.get(EmployeeFixture.selectors.relievingDateField)
      .last()
      .clear({ force: true })
      .should("be.empty")
      .type(releivingDate);
    cy.get(EmployeeFixture.selectors.contactField)
      .clear({ force: true })
      .should("be.empty")
      .type(contactNumber);
    cy.get(EmployeeFixture.selectors.statusField).select(status);
  }
);

Cypress.Commands.add('tableValidation',(table,td,columnLength,value)=>{
    cy.get(table)
    .children(td)
    .each((el, i) => {
      if (i <= columnLength) {
        cy.get(el).should("contain", value[i]);
      }
    });
})