// Require inquirer
const inquirer = require("inquirer");

const fs = require("fs");

// Require claases
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require("./src/teamGenerator");

const teamMembers = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the id of the manager?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email of the manager?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number of the manager?",
    },
  ])
  
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the role of this employee?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID number for this employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email for this employee?",
      },
      {
        type: "input",
        name: "github",
        message: "What is this employee's github username?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school does this intern attend?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Are there any other employee's you would like to add?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);
      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};
