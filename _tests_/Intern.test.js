const Intern = require('../lib/Intern')

const intern = new Intern('Fardina', '123456', 'fardina@gmail.com', 'UofT')


test(' test to check if we get constructor values for employee object', () => {
    expect(intern.name).toEqual('Fardina');
    expect(intern.id).toEqual('123456');
    expect(intern.email).toEqual('fardina@gmail.com');
    expect(intern.school).toEqual('UofT');  
});

test('getName method returns the employees name', () => {
    expect(intern.getName()).toEqual("Fardina")
});


test('test if we can get employee id from getID() method', () => {
    expect(intern.getId()).toEqual("123456")
});

test('test if we can get email from getEmail() method', () => {
    expect(intern.getEmail()).toEqual("fardina@gmail.com")
});intern

test('test if we can get role from getRole() method', () => {
    expect(intern.getRole()).toEqual("Intern")
});

test('test if we can get school from getSchool() method', () => {
    expect(intern.getSchool()).toEqual("UofT")
});