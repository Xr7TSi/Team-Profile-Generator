const { test, expect } = require("@jest/globals");
const Engineer2 = require("C:/Users/jrein/gt-bootcamp/homework/Team-Profile-Generator/employeeClasses/engineer2.js");

test("creates engineer2 name instance", () => {
  const name = "Mike Ehrmantrout";
  const engineer2 = new Engineer2(name);
  expect(engineer2.name === "Mike Ehrmantrout");
});

test("creates engineer2 id instance", () => {
  const id = "mh123";
  const engineer2 = new Engineer2(id);
  expect(engineer2.id === "mh123");
});

test("creates engineer2 email instance", () => {
  const email = "grrr@bostonpd.com";
  const engineer2 = new Engineer2(email);
  expect(engineer2.email === "grrr@bostonpd.com");
});

test("creates engineer 2 github instance", () => {
  const gitHub = "happybunny34";
  const engineer2 = new Engineer2(gitHub);
  expect(engineer2.gitHub === "happybunny34");
});
