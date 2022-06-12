// add a class for the employee
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // add a function to get name
  getName() {
    return this.name;
  }

  // add a function to get
  getId() {
    return this.id;
  }

  // add a function to get email
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
