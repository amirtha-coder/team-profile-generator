// declare all packages here
const inquirer = require("inquirer");
const fs = require("fs");

const getEngineerQuestions = () => {
  console.log("success");
};
// create an arry of engineer questions
const engineerQuestions = [
  {
    type: "input",
    message: "please enter your engineer's name",
    name: "engineerName",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your engineer ID:",
    name: "engineerID",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter engineer's email address:",
    name: "engineerEmailAdress",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter engineer's github username",
    name: "engineerGithubUsername",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
];
// get an array of intern questions
const internQuestions = [
  {
    type: "input",
    message: "please enter your intern's name",
    name: "internName",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your intern ID:",
    name: "internID",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter intern's email address:",
    name: "internEmailAdress",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter intern's scholl",
    name: "internSchool",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
];
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
  {
    type: "list",
    message: "Who would you like to add next?",
    choices: [
      {
        name: "Add an engineer",
        value: "engineer",
        short: "engineer",
        // when: (answer) => {
        //   if (true) {
        //     getEngineerQuestions();
        //   }
        // },
      },
      {
        name: "Add an intern",
        value: "intern",
        short: "intern",
      },
      {
        name: "Quit||no more employees needed",
        value: "quit",
        short: "quit",
      },
    ],
    name: "addAnother",
  },
];

// declare an init function
const init = async () => {
  const answers = await inquirer.prompt(starterQuestions);

  console.log(answers);
};
// call the init function
init();
