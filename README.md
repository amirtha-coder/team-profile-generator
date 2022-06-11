# team-profile-generator

A Node.JS application that, with the help of classes, creates a profile for a manager, engineer and intern in a team

Packages

- inquirer
- jest (dev)
- @types/jest (dev)

Sequence of questions:

(optional question)

1. Please enter team name:

(manager questions)

1. Please enter manager name:
2. Please enter manager ID:
3. Please enter manager email address:
4. Please enter manager office number:

5. What would you like to do next:

- Add an engineer
- Add an intern
- Quit application

(engineer questions)

1. Please enter engineer name:
2. Please enter engineer ID:
3. Please enter engineer email address:
4. Please enter engineer github username:

5. What would you like to do next:

- Add an engineer
- Add an intern
- Quit application

(intern questions)

1. Please enter intern name:
2. Please enter intern ID:
3. Please enter intern email address:
4. Please enter intern school:

5. What would you like to do next:

- Add an engineer
- Add an intern
- Quit application

Employee Test Cases

- should be an instance of an Employee
- should return the expected name
- should return the expected id
- should return the expected email
- should return the role of Employee

Intern Test Cases

- should be an instance of an Intern
- should return the expected name
- should return the expected id
- should return the expected email
- should return the expected school
- should return the role of Intern

Engineer Test Cases

- should be an instance of an Engineer
- should return the expected name
- should return the expected id
- should return the expected email
- should return the expected github username
- should return the role of Engineer

Manager Test Cases

- should be an instance of an Manager
- should return the expected name
- should return the expected id
- should return the expected email
- should return the expected office number
- should return the role of Manager

Preferred Order:

- Setup files and folders
- complete the styled sample team profile html file
- setup your classes (lib) and add tests
- write code to pass tests
- inquirer questions and complete application
