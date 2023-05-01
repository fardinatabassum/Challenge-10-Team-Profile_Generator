const managerSection = (data) => {
    return `<section class="manager">
    <h1>Manager</h1>
    <h4>Name: ${data.name}</h4>
    <h4>Email: ${data.email}</h4>
    <h4>ID: ${data.id}</h4>
    <h4>Office Number: ${data.officeNum}</h4>
</section>`
}

const createContent = () => {
    // loop through data, if its a manager, call the manageSection function and add it to an array
    // once done checking values of objects and adding their corresponding html sections(functions)
    // take that array and return it with array.join('')
}


const baseHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css"/>
        <title>Team Profile</title>
    </head>
    <body>
        ${createContent(data)}
    </body>
    </html>`
}