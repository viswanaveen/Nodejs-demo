const url = 'mongodb://test:socgen123@ds161092.mlab.com:61092/node-mongo';
const mongoose = require('mongoose')

mongoose.connect(url, { useNewUrlParser: true });
const User = require('../models/user-model')

User.find({}).then(data => {
    console.log(data)
})