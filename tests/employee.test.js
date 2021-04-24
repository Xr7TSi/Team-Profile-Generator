const { test, expect } = require("@jest/globals");
const Employee = require("../employeeClasses/employee.js");

test("creates employee instance", () => {
  const name = "Walter White";
  const employee = new Employee(name);
  expect(employee.name === "Walter White");
});

test("creates employee id instance", () => {
  const id = "id123";
  const employee = new Employee(id);
  expect(employee.id === "id123");
});

test("creates employee email instance", () => {
  const email = "heisenburg@email.com";
  const employee = new Employee(email);
  expect(employee.email === "heisenburg@email.com");
});
