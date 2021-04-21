const inquirer = require("inquirer");
const fs = require("fs");
const { clear } = require("console");
const profile = require("./generateTeamProfile.js");

const {
  pickEmployeeTitle,
  mgrQuestions,
  eng1Questions,
  eng2Questions,
  internQuestions,
  addEmployeeYN,
} = require("./questions.js");

const employee = require("./employeeFunctions/employee.js");
const engineer1 = require("./employeeFunctions/engineer1.js");
const engineer2 = require("./employeeFunctions/engineer2.js");
const manager = require("./employeeFunctions/manager.js");
const intern = require("./employeeFunctions/intern.js");

function getMgrData() {
  inquirer.prompt(mgrQuestions).then((data) => {
    console.log("Manager is " + data.name);
    addEmployee();
  });
}
getMgrData();

function addEmployee() {
  inquirer.prompt(addEmployeeYN).then((data) => {
    if (data.addEmployeeRes === "Yes") {
      getEmployeeData();
    }
    // if no, print html
  });
}

function getEmployeeData() {
  inquirer
    .prompt(pickEmployeeTitle)
    .then((data) => {
      console.log(data.employeeTitle);
      if (data.employeeTitle === "Engineer 1") {
        return inquirer.prompt(eng1Questions);
      } else if (data.employeeTitle === "Engineer 2") {
        return inquirer.prompt(eng2Questions);
      } else {
        return inquirer.prompt(internQuestions);
      }
    })
    .then(() => addEmployee());
}










