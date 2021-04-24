const { test, expect } = require('@jest/globals');
const manager = require('C:/Users/jrein/gt-bootcamp/homework/Team-Profile-Generator/employeeClasses/manager.js');

test('creates manager instance', () => {
    const name = "Walter White";
    const manager = new Manager(name);
    expect(manager.name === "Walter White")
});

test('creates manager id instance', () => {
    const id = "id123";
    const manager = new Manager(id);
    expect(manager.id === "id123")
})

test('creates manager email instance', () => {
    const email = "test@email.com";
    const manager = new Manager(email);
    expect(manager.email === "test@email.com")
})