const express = require('express')

const app = express()

const utils = require('./utils')

app.get('/', (req, res) => {
    res.send('Node.js and React combination can be good')
})

app.get('/employees', (req, res) => {
    res.send('List of Employees')
})

app.get('/employees/:id', (req, res) => {
    res.send('Employee Details Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})

app.get('/sum', (req, res) => {
    const result = utils.addNumbers(15, 25)
    res.send('Sum of 2 numbers is : ' + result)
})

app.get('/minus', (req, res) => {
    const result = utils.subtractNumbers(15, 25)
    res.send('Minus value is  : ' + result)
})

app.get('/multiply', (req, res) => {
    const result = utils.multiplyNumbers(15, 25)
    res.send('Product value is  : ' + result)
})

app.listen(3000, () => {
    console.log('Server listening on port no : ', 3000)
})