class Engineer1 extends Employee {
  constructor(gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub1() {
    this.gitHub.forEach((data) => {
      console.log(`Engineer1 GitHib username is ${data}`);
    });
  }
  // getRole overridden to return Engineer1
}

module.exports = Engineer1;
