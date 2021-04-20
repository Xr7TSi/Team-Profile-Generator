const inquirer = require("inquirer");
const fs = require("fs");
const { clear } = require("console");
const profile = require("./generateTeamProfile.js");

const { pickEmployeeTitle, mgrQuestions, eng1Questions, eng2Questions, internQuestions } = require("./questions.js");





// function getTitle() {
//   inquirer.prompt(pickEmployeeTitle)
//   .then((data) => {
//     console.log(data.employeeTitle)
//     return data.employeeTitle
//   })
// };
// getTitle()

function getTitle() {
  inquirer.prompt(pickEmployeeTitle).then((data) => {
    console.log(data.employeeTitle);
    if (data.employeeTitle === "Manager") {
      inquirer.prompt(mgrQuestions);
    } else if (data.employeeTitle === "Engineer 1") {
      inquirer.prompt(eng1Questions);
    } else if (data.employeeTitle === "Engineer 2") {
      inquirer.prompt(eng2Questions);
    } else {
      inquirer.prompt(internQuestions);
    }
  });
}
getTitle();

// class Manager {
//   constructor(mgrName, mgrID, mgrEmail, mgrOffice) {
//     this.mgrName = mgrName;
//     this.mgrID = mgrID;
//     this.mgrEmail = mgrEmail;
//     this.mgrOffice = mgrOffice
//   }
// }

// class Eng1 {
//   constructor(eng1Name, eng1ID, eng1Email, eng1GitHub) {
//     this.eng1Name = eng1Name;
//     this.eng1ID = eng1ID;
//     this.eng1email = eng1Email;
//     this.eng1GitHub = eng1Github;
//   }
// }

// class Eng2 {
//   constructor(eng2Name, eng2ID, eng2Email, eng2GitHub) {
//     this.eng2Name = eng2Name;
//     this.eng2ID = eng2ID;
//     this.eng2email = eng2Email;
//     this.eng2GitHub = eng2Github;
//   }
// }

// class Intern {
//   constructor(internName, internID, internEmail, internSchool) {
//     this.internName = internName;
//     this.internID = internID;
//     this.internEmail = internEmail;
//     this.internSchool = internSchool;
//   }
// }
