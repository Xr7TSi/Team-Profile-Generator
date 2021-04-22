class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.name;
  }
}

module.exports = Manager;
