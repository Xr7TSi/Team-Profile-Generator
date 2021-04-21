class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    this.name.forEach((data) => {
      console.log(`Employee name is ${data}`);
    });
  }
  getId() {
    this.id.forEach((data) => {
      console.log(`Employee ID is ${data}`);
    });
  }
  getEmail() {
    this.email.forEach((data) => {
      console.log(`Employee email is ${data}`);
    });
  }
  getRole() {
    // return employee
  }
}

module.exports = Employee;
