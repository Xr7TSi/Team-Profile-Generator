class Intern extends Employee {
    constructor(internSchool) {
      super(name, id, email);
      this.internSchool = internSchool;
    }
    getSchool() {
      this.internSchool.forEach((data) => {
        console.log(`Intern school is ${data}`);
      });
    }
    // getRole overridden to return Intern
  }

  module.exports = Intern