const Employee = require('../lib/Employee')

const employee = new Employee("Fardina", "123456", "fardina@gmail.com")


test(' test to check if we get constructor values for employee object', () => {
    expect(employee.name).toEqual('Fardina');
    expect(employee.id).toEqual('123456');
    expect(employee.email).toEqual('fardina@gmail.com');
    
});

test('getName method returns the employees name', () => {
    expect(employee.getName()).toEqual("Fardina")
});

test('test if we can get employee id from getID() method', () => {
    expect(employee.getId()).toEqual("123456")
});

test('test if we can get email from getEmail() method', () => {
    expect(employee.getEmail()).toEqual("fardina@gmail.com")
});

test('test if we can get role from getRole() method', () => {
    expect(employee.getRole()).toEqual("Employee")
});