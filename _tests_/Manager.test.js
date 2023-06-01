const Manager = require('../lib/Manager')

const manager = new Manager('Fardina', '123456', 'fardina@gmail.com', '123')


test(' test to check if we get constructor values for employee object', () => {
    expect(manager.name).toEqual('Fardina');
    expect(manager.id).toEqual('123456');
    expect(manager.email).toEqual('fardina@gmail.com');
    expect(manager.officeNumber).toEqual('123');
    
    
});

test('getName method returns the employees name', () => {
    expect(manager.getName()).toEqual("Fardina")
});

test('test if we can get employee id from getID() method', () => {
    expect(manager.getId()).toEqual("123456")
});

test('test if we can get email from getEmail() method', () => {
    expect(manager.getEmail()).toEqual("fardina@gmail.com")
});

test('test if we can get office number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toEqual("123")
});

test('test if we can get email from getRole() method', () => {
    expect(manager.getRole()).toEqual("Manager")
});

