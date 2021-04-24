const { test, expect } = require("@jest/globals");
const Intern = require("../employeeClasses/intern.js");

test("creates intern name instance", () => {
  const name = "Jesse Pinkman";
  const intern = new Intern(name);
  expect(intern.name === "Jesse Pinkman");
});

test("creates intern id instance", () => {
  const id = "js123";
  const intern = new Intern(id);
  expect(intern.id === "js123");
});

test("creates intern email instance", () => {
  const email = "yo@email.com";
  const intern = new Intern(email);
  expect(intern.email === "yo@email.com");
});

test("creates intern school instance", () => {
  const school = "J.P. Wynne High School";
  const intern = new Intern(school);
  expect(intern.school === "J.P. Wynne High School");
});
