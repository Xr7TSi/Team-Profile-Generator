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
          (eng1Name = data.name),
            (eng1Id = data.id),
            (eng1Email = data.email),
            (eng1Github = data.gitHub);
        });
      } else if (data.employeeTitle === "Engineer 2") {
        return inquirer.prompt(eng2Questions).then((data) => {
          (eng2Name = data.name),
            (eng2Id = data.id),
            (eng2Email = data.email),
            (eng2Github = data.gitHub);
        });
      } else {
        return inquirer.prompt(internQuestions).then((data) => {
          (internName = data.name),
            (internId = data.id),
            (internEmail = data.email),
            (internGithub = data.gitHub),
            (internSchool = data.school);
        });
      }
    })
    .then(() => addEmployee());
}
