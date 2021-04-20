const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');
const profile = require('./generateTeamProfile.js');
const tileChoice = require('./titleBasedPrompt.js')

const employeeTitle = [{
  type: 'list',
  message: 'Choose employee title',
  name: 'employeeTitle',
  choices: [`Manager`, `Engineer 1`, `Engineer 2`, `Intern`,]
}];

const mgrQuestions = [{
  type: 'input',
  message: 'Enter Manager name:',
  name: 'mgrName',
},
{
  type: 'input',
  message: 'Enter Manager employee ID:',
  name: 'mgrID',
},
{
type: 'input',
message: 'Enter Manager email:',
name: 'mgrEmail',
},
{
type: 'input',
message: 'Enter Manager office number:',
name: 'mgrOffice',
}];

const eng1Questions = [{
  type: 'input',
  message: 'Enter Engineer 1 name:',
  name: 'eng1Name',
},
{
type: 'input',
  message: 'Enter Engineer 1 employee ID:',
  name: 'eng1ID',
},
{
  type: 'input',
    message: 'Enter Engineer 1 GitHub email:',
    name: 'eng1Email',
},
{
  type: 'input',
    message: 'Enter Engineer 1 GitHub username:',
    name: 'eng1GitHub',
}];

const eng2Questions = [{
  type: 'input',
  message: 'Enter Engineer 2 name:',
  name: 'eng2Name',
},
{
type: 'input',
  message: 'Enter Engineer 2 employee ID:',
  name: 'eng2ID',
},
{
  type: 'input',
    message: 'Enter Engineer 2 GitHub email:',
    name: 'eng2Email',
},
{
  type: 'input',
    message: 'Enter Engineer 2 GitHub username:',
    name: 'eng2GitHub',
}];

const internQuestions = [{
  type: 'input',
  message: 'Enter Intern name:',
  name: 'internName',
},
{
  type: 'input',
  message: 'Enter Intern employee ID:',
  name: 'internID', 
},
{
  type: 'input',
  message: 'Enter Intern email:',
  name: 'internEmail', 
},
{
  type: 'input',
  message: 'Enter Intern school:',
  name: 'internSchool', 
}];




function getTitle() {
  inquirer.prompt(employeeTitle)
  .then((data) => {
    console.log(data.employeeTitle)
    return data.employeeTitle 
  })
};
getTitle()

// titleBasedPrompt()

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



  





