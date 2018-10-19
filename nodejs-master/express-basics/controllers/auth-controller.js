const User = require('../models/user-model')
const jwt = require('jsonwebtoken')

function loginUser(req, res) {
    console.log(req.body)

    User.findOne({
        name: req.body.name
    }).then(user => {
        if (!user) {
            res.status(403).json({ success: false, message: 'Failed. User not found.' });
        } else {
            if (user.password != req.body.password) {
                res.status(403).json({ success: false, message: 'Failed. Wrong password.' });
            } else {
                
                const payload = {
                    name: user.name,
                    admin: user.admin 
                };
                var token = jwt.sign(payload, "meluga");

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Successfully logged in!',
                    token: token
                });
            }
        }
    })
}

module.exports = {
    loginUser
}


/*

User.findOne({
        name: req.body.name
    }).then(user => {
        console.log(user)

        if (!user) {
            res.status(403).json({ success: false, 
                                   message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    admin: user.admin 
                };
                var token = jwt.sign(payload, "meluga");

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }   
        }
    }).catch(err => {
        console.log(err)
        res.status(403).send({
            error: "Error Authenticating User"
        })
    })

    */