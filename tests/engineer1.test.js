const { test, expect } = require("@jest/globals");
const Engineer1 = require("../employeeClasses/engineer1.js");

test("creates engineer1 name instance", () => {
  const name = "Gus Fring";
  const engineer1 = new Engineer1(name);
  expect(engineer1.name === "Gus Fring");
});

test("creates engineer1 id instance", () => {
  const id = "gf123";
  const engineer1 = new Engineer1(id);
  expect(engineer1.id === "gf123");
});

test("creates engineer1 email instance", () => {
  const email = "gfring@madrigal.com";
  const engineer1 = new Engineer1(email);
  expect(engineer1.email === "hgfring@madrigal.com");
});

test("creates engineer1 github instance", () => {
  const gitHub = "polloshermanos27";
  const engineer1 = new Engineer1(gitHub);
  expect(engineer1.gitHub === "polloshermanos27");
});
