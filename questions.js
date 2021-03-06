module.exports = {
  pickEmployeeTitle: {
    type: "list",
    message: "Choose next employee type:",
    name: "employeeTitle",
    choices: ["Engineer 1", "Engineer 2", "Intern"],
  },
  addEmployeeYN: {
    type: "list",
    message:
      "Would you like to add an employee, or generate your Team Profile?",
    name: "addEmployeeRes",
    choices: ["Add an employee", "Generate HTML"],
  },
  mgrQuestions: [
    {
      type: "input",
      message: "Enter Manager name:",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Manager employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Manager email:",
      name: "email",
      validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("    Email entry invalid. Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter Manager office number:",
      name: "office",
    },
  ],
  eng1Questions: [
    {
      type: "input",
      message: "Enter Engineer 1 name:",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Engineer 1 employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Engineer 1 email:",
      name: "email",
      validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("    Email entry invalid. Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter Engineer 1 GitHub username:",
      name: "gitHub",
    },
  ],
  eng2Questions: [
    {
      type: "input",
      message: "Enter Engineer 2 name:",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Engineer 2 employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Engineer 2 email:",
      name: "email",
      validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("    Email entry invalid. Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter Engineer 2 GitHub username:",
      name: "gitHub",
    },
  ],
  internQuestions: [
    {
      type: "input",
      message: "Enter Intern name:",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Intern employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Intern email:",
      name: "email",
      validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("    Email entry invalid. Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter Intern school:",
      name: "school",
    },
  ],
};
