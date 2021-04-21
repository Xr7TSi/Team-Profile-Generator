module.exports = {
    pickEmployeeTitle: {
      type: "list",
      message: "Choose employee title",
      name: "employeeTitle",
      choices: ["Manager", "Engineer 1", "Engineer 2", "Intern"],
    },
    mgrQuestions: [
      {
        type: "input",
        message: "Enter Manager name:",
        name: "mgrName",
      },
      {
        type: "input",
        message: "Enter Manager employee ID:",
        name: "mgrID",
      },
      {
        type: "input",
        message: "Enter Manager email:",
        name: "mgrEmail",
      },
      {
        type: "input",
        message: "Enter Manager office number:",
        name: "mgrOffice",
      },
    ],
    eng1Questions: [
      {
        type: "input",
        message: "Enter Engineer 1 name:",
        name: "eng1Name",
      },
      {
        type: "input",
        message: "Enter Engineer 1 employee ID:",
        name: "eng1ID",
      },
      {
        type: "input",
        message: "Enter Engineer 1 email:",
        name: "eng1Email",
      },
      {
        type: "input",
        message: "Enter Engineer 1 GitHub username:",
        name: "eng1GitHub",
      },
    ],
    eng2Questions: [
      {
        type: "input",
        message: "Enter Engineer 2 name:",
        name: "eng2Name",
      },
      {
        type: "input",
        message: "Enter Engineer 2 employee ID:",
        name: "eng2ID",
      },
      {
        type: "input",
        message: "Enter Engineer 2 email:",
        name: "eng2Email",
      },
      {
        type: "input",
        message: "Enter Engineer 2 GitHub username:",
        name: "eng2GitHub",
      },
    ],
    internQuestions: [
      {
        type: "input",
        message: "Enter Intern name:",
        name: "internName",
      },
      {
        type: "input",
        message: "Enter Intern employee ID:",
        name: "internID",
      },
      {
        type: "input",
        message: "Enter Intern email:",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Enter Intern school:",
        name: "internSchool",
      },
    ],
  };
  