const Engineer = require('../lib/Engineer')

const engineer = new Engineer('Fardina', '123456', 'fardina@gmail.com', 'fardinatabassum')


test(' test to check if we get constructor values for employee object', () => {
    expect(engineer.name).toEqual('Fardina');
    expect(engineer.id).toEqual('123456');
    expect(engineer.email).toEqual('fardina@gmail.com');
    expect(engineer.github).toEqual('fardinatabassum');
    
    
});

test('getName method returns the employees name', () => {
    expect(engineer.getName()).toEqual("Fardina")
});


test('test if we can get employee id from getID() method', () => {
    expect(engineer.getId()).toEqual("123456")
});

test('test if we can get email from getEmail() method', () => {
    expect(engineer.getEmail()).toEqual("fardina@gmail.com")
});

test('test if we can get email from getRole() method', () => {
    expect(engineer.getRole()).toEqual("Engineer")
});

test('test if we can get github username from getGithub() method', () => {
    expect(engineer.getGithub()).toEqual("fardinatabassum")
});
