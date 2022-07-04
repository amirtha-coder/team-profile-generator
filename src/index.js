// declare all packages here
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const path = require("path");
const { builtinModules } = require("module");
const { generateHTML } = require("./generator");
const internCards = [];
const engineerCards = [];
const managerCards = [];
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
    name: "name",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your engineer ID:",
    name: "id",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter engineer's email address:",
    name: "email",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter engineer's github username",
    name: "githubUsername",
    when: (answers) => answers.addAnother === "engineer",
    validate: (answer) => {
      return answer ? true : "Please enter the engineer's details to continue";
    },
  },
  {
    type: "input",
    message: "please enter your intern's name",
    name: "name",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your intern ID:",
    name: "id",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the manager's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter intern's email address:",
    name: "email",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
  {
    type: "input",
    message: "Please enter intern's school",
    name: "school",
    when: (answers) => answers.addAnother === "intern",
    validate: (answer) => {
      return answer ? true : "Please enter the intern's details to continue";
    },
  },
];
const addAnEmployee = (employee) => {
  const { name, id, email } = employee;
  if (employee.addAnother === "intern") {
    const intern = new Intern(name, id, email, employee.school);
    employees.push(intern);
  } else {
    const engineer = new Engineer(name, id, email, employee.githubUsername);
    employees.push(engineer);
  }
};

const sortEmployees = (employee) => {
  let managerCard = false;
  console.log("success");
  if (employee instanceof Intern) {
    const internCard = `<div class="card mx-3 my-2 cards">
              <div class="card-header employees-intern">ID:${employee.getId()}</div>
              <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <ul>
                  <li>
                    Email:
                    <a href="mailto:amirtha.m.muthirulandi@gmail.com">
                      ${employee.getRole()}</a
                    >
                  </li>
                  <li>School: ${employee.getSchool()}</li>
                </ul>
                <p class="card-text"></p>
              </div>
            </div>`;
    internCards.push(internCard);
    return;
  }
  if (employee instanceof Engineer) {
    const engineerCard = `<div class="card mx-3 my-2 cards">
              <div class="card-header employees-engineer">ID:${employee.getId()}</div>
              <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <ul>
                  <li>
                    Email:
                    <a href="mailto:amirtha.m.muthirulandi@gmail.com">
                      ${employee.getEmail()}</a
                    >
                  </li>
                  <li>
                      <i class="fa-brands fa-github"></i
                    > :
                    <a href="https://github.com/${employee.getGithubUsername()}" target="_blank"> Click here</a>
                      </a>
                  </li>
                </ul>
                <p class="card-text"></p>
              </div>
            </div>`;
    engineerCards.push(engineerCard);
  }
  if (employee instanceof Manager) {
    const managerCard = `<div class="card mx-3 cards">
              <div class="card-header employees-manager">ID:${employee.getId()}</div>
              <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <ul>
                  <li>
                    Email:
                    <a href="mailto:amirtha.m.muthirulandi@gmail.com">
                      ${employee.getEmail()}</a
                    >
                  </li>
                  <li>
                   Office No. : ${employee.getOfficeNumber()}
                  </li>
                </ul>
                <p class="card-text"></p>
              </div>
            </div>`;
    managerCards.push(managerCard);
  }
};
// declare an init function
const init = async () => {
  const initialAnswers = await inquirer.prompt(starterQuestions);
  const manager = new Manager(
    initialAnswers.managerName,
    initialAnswers.managerID,
    initialAnswers.managerEmailAdress,
    initialAnswers.managerOfficeNumber
  );
  employees.push(manager);

  let inProgress = true;
  while (inProgress) {
    const answers = await inquirer.prompt(choiceQuestions);
    if (answers.addAnother === "quit") {
      inProgress = false;
    } else {
      addAnEmployee(answers);
      console.log(employees);
    }
  }

  employees.forEach(sortEmployees);
  generateHTML(managerCards, internCards, engineerCards);
};

// call the init function
init();

module.exports = {
  internCards,
  engineerCards,
  managerCards,
  sortEmployees,
};
