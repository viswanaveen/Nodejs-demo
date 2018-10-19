const url = 'mongodb://test:socgen123@ds161092.mlab.com:61092/node-mongo';
const mongoose = require('mongoose')

mongoose.connect(url, { useNewUrlParser: true });
const User = require('../models/user-model')

const user = new User({
    name: 'lpshivan',
    password: 'lpshivan',
    admin: true
});

user.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log('Error occurred')
})