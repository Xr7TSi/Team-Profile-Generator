class Engineer2 extends Employee {
  constructor(gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub2() {
    this.gitHub.forEach((data) => {
      console.log(`Engineer2 GitHib username is ${data}`);
    });
  }
  // getRole overridden to return Engineer2
}

module.exports = Engineer2;
