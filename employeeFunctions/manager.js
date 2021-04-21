class Manager extends Employee {
    constructor(officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
      this.officeNumber.forEach(data => {
        console.log(`Manager office number is ${data}`)
      });
    }
    // getRole overridden to return Manager
  }

  module.exports = Manager