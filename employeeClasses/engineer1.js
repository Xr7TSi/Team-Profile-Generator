const Employee = require('./employee.js')

class Engineer1 extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer1";
  }
}

module.exports = Engineer1;
