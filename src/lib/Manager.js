const Employee = require("./Employee");
// add a class for the manager
class Manager extends Employee {
  constructor(name, email, id, officeNumber, role) {
    super(name, email, id);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  // add a function to get office number
  getOfficeNumber() {
    return this.officeNumber;
  }
  // add a function to get role
  getRole() {
    return this.role;
  }
}

module.exports = Manager;
