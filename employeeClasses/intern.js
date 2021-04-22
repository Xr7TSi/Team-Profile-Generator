class Intern extends Employee {
  constructor(internSchool) {
    super(name, id, email);
    this.internSchool = internSchool;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.name;
  }
}

module.exports = Intern;
