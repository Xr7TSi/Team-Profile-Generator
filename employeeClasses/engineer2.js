class Engineer2 extends Employee {
  constructor(gitHub) {
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
