const inquirer = require("inquirer");
const fs = require("fs");
const { clear } = require("console");
const genProfile = require("./generateTeamProfile.js");

const {
  pickEmployeeTitle,
  mgrQuestions,
  eng1Questions,
  eng2Questions,
  internQuestions,
  addEmployeeYN,
} = require("./questions.js");

// const employee = require("./employeeClasses/employee.js");
// const engineer1 = require("./employeeClasses/engineer1.js");
// const engineer2 = require("./employeeClasses/engineer2.js");
// const manager = require("./employeeClasses/manager.js");
// const intern = require("./employeeClasses/intern.js");

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

fs.appendFile('team-profile.html', genProfile(), function (err) {
  if (err) throw err;
  console.log('Team Profile generated.');
});

// fs.appendFile('team-profile.html', "Hi there!", function (err) {
//   if (err) throw err;
//   console.log('Team Profile generated.');
// });










