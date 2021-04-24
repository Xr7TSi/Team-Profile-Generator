const { test, expect } = require("@jest/globals");
const Manager = require("../employeeClasses/manager.js");

test("creates manager name instance", () => {
  const name = "Walter White";
  const manager = new Manager(name);
  expect(manager.name === "Walter White");
});

test("creates manager id instance", () => {
  const id = "id123";
  const manager = new Manager(id);
  expect(manager.id === "id123");
});

test("creates manager email instance", () => {
  const email = "heisenburg@email.com";
  const manager = new Manager(email);
  expect(manager.email === "heisenburg@email.com");
});

test("creates manager office instance", () => {
  const office = "office123";
  const manager = new Manager(office);
  expect(manager.office === "office123");
});
