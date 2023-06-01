// Require inquirer and fs node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Require team profile modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// import html generator
const createHTML = require("./src/teamGenerator");


// prompt to create profiles
const teamMembers = [];
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the manager?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the manager?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the manager?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number of the manager?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the office number!");
            return false;
          }
        },
      },
    ])

    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamMembers.push(manager);
      console.log("Manager has been added to the team");
      console.log(manager);
    });
};

// additional prompt menu but does not work
// const promptMenu = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "menu",
//         message: "Please select what you would like to do next",
//         choices: ['add an employee', 'finish building my team'],
//       },
//     ])
//     .then((userInput) => {
//       console.log(userInput)
//       if (userInput.menu === 'add an employee'){
//         addEmployee()
//       }else if (userInput.menu === 'finish building my team'){
//         return(teamMembers)
//       }
//     });
// };

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
        console.log("Employee has been added to the team!");
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log("Employee has been added to the team!");
        console.log(employee);
      }
      teamMembers.push(employee);
      if (confirmAddEmployee) {
        return addEmployee();
      } else {
        return teamMembers;
      }
    });
};


  
  //writing to HTML page
  const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
      console.log(data),
      err ? console.log(err) : console.log("HTML successfully created.");
    });
  };
  
  // Add further input
  addManager()
  // .then(promptMenu)
  .then(addEmployee)
  .then((teamMembers) => {
      console.log("Team has been built");
    return createHTML(teamMembers);
  })
  .then((HTMLpage) => {
    return writeFile(HTMLpage);
  })
  .catch((err) => {
    console.log(err);
  });
