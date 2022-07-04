const Employee = require("./Employee");

// add a class for the intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
    this.role = "Intern";
  }

  // add a function to get school
  getSchool() {
    return this.school;
  }

  // add a function to get role
  getRole() {
    return this.role;
  }
}

// export the class
module.exports = Intern;
