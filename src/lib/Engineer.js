const Employee = require("./Employee");

// add a class for the employee
class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);
    // get username and role
    this.githubUsername = githubUsername;
    this.role = "Engineer";
  }
  //   add a function to get Username
  getGithubUsername() {
    return this.githubUsername;
  }
  //  add a function to get role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
