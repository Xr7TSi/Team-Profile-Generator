const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');
const markdown = require('./generateTeamProfile.js');
const questions = [{
  type: 'input',
  message: 'Enter your project title:',
  name: 'title',
},



function init() {
  inquirer.prompt(questions)
  .then((data) => {
    fs.writeFile(`teamProfile.html`, markdown(data), (err) =>
      err ? console.log(err) : console.log('Write File Success!'),
    ); 
  })
};

init();



