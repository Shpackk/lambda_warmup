const jwt = require('jsonwebtoken')

module.exports.sign = user => {
    const expiresIn = Math.floor(Math.random() * (60 - 30 + 1) + 30)
    try {
        if (user.hasOwnProperty('password')) {
            delete user.password
        }
        return jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn
        })
    } catch (error) {
        throw error
    }
}

module.exports.verifyTTL = token => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports.decode = token => {
    return jwt.decode(token, process.env.JWT_SECRET)
}


