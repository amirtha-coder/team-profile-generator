// declare all packages here
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

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

const choiceQuestions = [
  {
    type: "list",
    message: "Who would you like to add next?",
    choices: [
      {
        name: "Add an engineer",
        value: "engineer",
        short: "engineer",
        loop: true,
      },
      {
        name: "Add an intern",
        value: "intern",
        short: "intern",
        loop: true,
      },
      {
        name: "Quit||no more employees needed",
        value: "quit",
        short: "quit",
        loop: false,
      },
    ],
    name: "addAnother",
  },
  {
    type: "input",
    message: "please enter your engineer's name",
    name: "engineerName",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your engineer ID:",
    name: "engineerID",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter engineer's email address:",
    name: "engineerEmailAdress",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter engineer's github username",
    name: "engineerGithubUsername",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "please enter your intern's name",
    name: "internName",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your intern ID:",
    name: "internID",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter intern's email address:",
    name: "internEmailAddress",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter intern's school",
    name: "internSchool",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
];

// declare an init function
const init = async () => {
  const initialAnswers = await inquirer.prompt(starterQuestions);
  const addedManager = employees.push(initialAnswers);
  const answers = await inquirer.prompt(choiceQuestions);
  if (answers.addAnother === "quit") {
    console.log(answers);
    return employees.push(answers);
  }

  //   if (answers.addAnother.engineer) {
  //     // create an arry of engineer questions
  //     const answers = await inquirer.prompt(engineerQuestions);
  //     console.log(answers);
  //   }

  console.log(addedManager);
};

// call the init function
init();
