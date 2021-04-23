const Employee = require('./employee.js')

class Engineer2 extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer2";
  }
}

module.exports = Engineer2;
