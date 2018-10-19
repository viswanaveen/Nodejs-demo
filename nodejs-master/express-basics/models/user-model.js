const mongoose = require('mongoose');

const UserSchema = {
    name: String, 
    password: String, 
    admin: Boolean 
}

const User = mongoose.model('User', UserSchema)

module.exports = User;