class Engineer1 extends Employee {
  constructor(gitHub) {
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
