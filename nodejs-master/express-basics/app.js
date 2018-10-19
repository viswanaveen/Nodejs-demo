const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const empRouter = require('./routes/emp-routes')
const authRouter = require('./routes/auth-routes')

const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
const PORT = 3000

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())

app.use(authRouter)

const authMiddlware = require('./middlewares/auth')

//app.use('/api/employees', authMiddlware.verifyUser, empRouter)
app.use('/api/employees', empRouter)

const url = 'mongodb://test:socgen123@ds161092.mlab.com:61092/node-mongo';

mongoose.connect(url, { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log('Server listening on port no : ', PORT)
})

module.exports = app;