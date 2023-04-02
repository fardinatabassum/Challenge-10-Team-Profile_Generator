const Engineer = require('../lib/Engineer')

// First we say test, Then we tell it what the test is
test("name is a string", () => {
    // in arrow function, we create a variable to be tested -- the object
    const engineer = new Engineer("Fardina", 1, "fardina@gmail.com", "fardina123")
    // this is the test, we expect var engineer.id to be anything that is a string
    expect(engineer.name).toEqual(expect.any(String))
})

test("id is a number", () => {
    const engineer = new Engineer("Fardina", 1, "fardina@gmail.com", "fardina123")

    expect(engineer.id).toEqual(expect.any(Number))
})