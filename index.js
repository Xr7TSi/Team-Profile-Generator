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

// remember to extend classes

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    this.name.forEach((employee) => {
      console.log(`Employee name is ${employee}`);
    });
  }
  getId() {
    this.id.forEach((employee) => {
      console.log(`Employee ID is ${employee}`);
    });
  }
  getEmail() {
    this.email.forEach((employee) => {
      console.log(`Employee email is ${employee}`);
    });
  }
  getRole() {
    // return employee
  }
}

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // getRole overridden to return Manager
}

class Engineer1 extends Employee {
  constructor(gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  // getRole overridden to return Engineer1
}

class Engineer2 extends Employee {
  constructor(gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  // getRole overridden to return Engineer2
}

class Intern extends Employee {
  constructor(internSchool) {
    super(name, id, email);
    this.internSchool = internSchool;
  }
  // getRole overridden to return Intern
}
