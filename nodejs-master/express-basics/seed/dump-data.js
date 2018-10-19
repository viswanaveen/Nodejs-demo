const faker = require('faker')
const Employee = require('../models/emp-model')

const employees = []
const url = 'mongodb://test:socgen123@ds161092.mlab.com:61092/node-mongo';
const mongoose = require('mongoose')

mongoose.connect(url, { useNewUrlParser: true });

for (let i =0; i<5; i++) {

    const fakeEmployee = {
        empNo: faker.random.alphaNumeric(6),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city()
    }

    employees.push(fakeEmployee)
}

console.log(employees)

Employee.insertMany(employees)
    .then(res => {
        console.log('Inserted documents', res.insertedCount)
    })
    .catch(err => {
        console.log('Some error occured')
    })