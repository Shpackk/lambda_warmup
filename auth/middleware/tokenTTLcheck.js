const jwtService = require('../services/jwtService')

function checkTTL(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwtService.decode(token)
        const curTime = new Date().getTime() / 1000
        if (curTime > decodedToken.exp) {
            return res.status(401).send({
                message: "Token has expired. Please re-login"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkTTL