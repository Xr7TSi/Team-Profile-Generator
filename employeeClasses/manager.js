class Manager extends Employee {
  constructor(office) {
    super(name, id, email);
    this.office = office;
  }
  getOfficeNumber() {
    return this.office;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
