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
                <li class="id list-group-item">ID: ${manager.id}</li>
                <li class="email list-group-item" >Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="office list-group-item">Office Number: ${manager.officeNumber}</li>
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
                <li class="id list-group-item">ID: ${engineer.id}</li>
                <li class="email list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="github list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
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
                <li class="id list-group-item">ID: ${intern.id}</li>
                <li class="email list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="school list-group-item">School: ${intern.school}</li>
            </div>
    </div>
</div>`;
};

const createHTML = function (data) {
  let sectionArray = [];

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
    <nav class="navbar py-4 bg-danger text-white" id="navbar">
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
