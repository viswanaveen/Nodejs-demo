const jwt = require('jsonwebtoken')

function verifyUser(req, res, next) {
    console.log('Verifying User')
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, "meluga", function(err, decoded) {      
            if (err) {
                console.log(err)
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                console.log('Decoded stuffs', decoded)
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;    
                next();
            }
        });
  
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    
    }
    
}

module.exports = {
    verifyUser
}