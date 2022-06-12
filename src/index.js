// declare all packages here
const inquirer = require("inquirer");
const fs = require("fs");

// declare questions array
const starterQuestions = [
  {
    type: "input",
    message: "please enter your manager's name",
    name: "managerName",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your manager ID:",
    name: "managerID",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter manager's email address:",
    name: "managerEmailAdress",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter manager's office number:",
    name: "managerOfficeNumber",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
];

// declare an init function
const init = async () => {
  const answers = await inquirer.prompt(starterQuestions);
  console.log(answers);
};
// call the init function
init();
``;
