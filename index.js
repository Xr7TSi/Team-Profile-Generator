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
const manager = require("./employeeClasses/manager.js");
// const intern = require("./employeeClasses/intern.js");

function getMgrData() {
  inquirer.prompt(mgrQuestions).then((data) => {
    const mgrName = data.name
    const mgrId = data.id
    const mgrEmail = data.email
    const mgrOffice = data.office
    const newMgr = new Manager(mgrName, mgrId, mgrEmail, mgrOffice)
    addEmployee();
  });
}
getMgrData();

function addEmployee() {
  inquirer.prompt(addEmployeeYN).then((data) => {
    if (data.addEmployeeRes === "Yes") {
      getEmployeeData();
    } else {
      fs.appendFile("team-profile.html", genProfile(data), function (err) {
        if (err) throw err;
        console.log("Team Profile generated.");
      });
    }
  });
}

function getEmployeeData() {
  inquirer
    .prompt(pickEmployeeTitle)
    .then((data) => {
      if (data.employeeTitle === "Engineer 1") {
        return inquirer.prompt(eng1Questions).then((data) => {
          const eng1Name = data.name
          const eng1Id = data.id
          const eng1Email = data.email
          const eng1Github = data.gitHub
          const newEng1 = new Engineer1(eng1Name, eng1Id, eng1Email, eng1Github)
        });
      } else if (data.employeeTitle === "Engineer 2") {
        return inquirer.prompt(eng2Questions).then((data) => {
          const eng2Name = data.name
          const eng2Id = data.id
          const eng2Email = data.email
          const eng2Github = data.gitHub
          const newEng2 = new Engineer2(ng2Name, eng2Id, eng2Email, eng2Github)
        });
      } else {
        return inquirer.prompt(internQuestions).then((data) => {
          const internName = data.name
          const internId = data.id
          const internEmail = data.email
          const internSchool = data.school
          const newIntern = new Intern(internName, internId, internEmail, internSchool)
        });
      }
    })
    .then(() => addEmployee());
}
