// template literal to create manager card
const managerDiv = function (manager) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">groups</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
};
// template literal to create engineer card
const engineerDiv = function (engineer) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">engineering</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`;
};

// template literal to create intern card
const internDiv = function (intern) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>`;
};

const createHTML = function (data) {
  sectionArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // making managers card
    if (role === "Manager") {
      const managerCard = managerDiv(employee);
      sectionArray.push(managerCard);
    }

    // making engineers card
    if (role === "Engineer") {
      const engineerCard = engineerDiv(employee);
      sectionArray.push(engineerCard);
    }

    // making interns card
    if (role === "Intern") {
      const internCard = internDiv(employee);
      sectionArray.push(internCard);
    }
  }
  const employeeCards = sectionArray.join("");
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};
// const managerSection = (data) => {
//     return `<section class="manager">
//     <h1>Manager</h1>
//     <h4>Name: ${data.name}</h4>
//     <h4>Email: ${data.email}</h4>
//     <h4>ID: ${data.id}</h4>
//     <h4>Office Number: ${data.officeNum}</h4>
// </section>`
// }

const createContent = () => {
  // loop through data, if its a manager, call the manageSection function and add it to an array
  // once done checking values of objects and adding their corresponding html sections(functions)
  // take that array and return it with array.join('')
};

const generateTeamPage = (employeeCards) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css"/>
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
    <header>
    <nav class="navbar bg-danger text-white" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            ${employeeCards}
        </div>
    </div>
</main>

    </body>
    </html>`;
};

module.exports = createHTML;
