// declare all packages here
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const path = require("path");
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
    const internCard = ` 
            <div class="card mx-3 my-2 cards">
              <div class="card-header employees-intern">ID:${employee.getId()}</div>
              <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <ul>
                  <li>
                    Email:
                    <a href="mailto:amirtha.m.muthirulandi@gmail.com">
                      ${employee.getEmail()}</a
                    >
                  </li>
                  <li>School: ${employee.getSchool()}</li>
                </ul>
                <p class="card-text"></p>
              </div>`;
    internCards.push(internCard);
    return;
  }
  if (employee instanceof Engineer) {
    const engineerCard = `
            <div class="card mx-3 my-2 cards">
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
              </div>`;
    engineerCards.push(engineerCard);
  }
  if (employee instanceof Manager) {
    const managerCard = `
            <div class="card mx-3 cards">
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

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Sample Profile Generator</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <!-- header title 1 -->
    <header>
      <h1 class="title">Our Team</h1>
    </header>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item my-2">
        <h2
          class="accordion-header employees-manager"
          id="panelsStayOpen-headingOne"
        >
          <button
            class="accordion-button employees-manager"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Manager
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <!-- Manager div -->
          <div class="accordion-body d-flex justify-content-center">
            ${[...managerCards]}
          </div>
        </div>
      </div>
      <div class="accordion-item my-2">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed employees-engineer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Engineers
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body d-flex justify-content-center flex-wrap">
          ${[...engineerCards]}
          </div>
        </div>
      </div>
      <div class="accordion-item my-2">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed employees-intern"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Interns
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body d-flex justify-content-center flex-wrap">
          ${[...internCards]}
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
      integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
      integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
  // write html to file
  fs.writeFileSync(path.join(__dirname, "../dist", "index.html"), html);
};

// call the init function
init();
