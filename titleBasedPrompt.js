titleBasedPrompt = () => {
    if (employeeTitle.choices === "Manager") {
    inquirer.prompt(mgrQuestions)
  } else if (employeeTitle.choices === "Engineer 1") {
    inquirer.prompt(eng1Questions)
  } else if (employeeTitle.choices === "Engineer 2") {
    inquirer.prompt(eng2Questions)
  } else {
    inquirer.prompt(internQuestions)
  }
}; 