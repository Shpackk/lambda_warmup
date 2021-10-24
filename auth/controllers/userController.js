const jwtService = require('../services/jwtService')
const mongoDTO = require('../DTO/userDbDTO')


module.exports.me = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        const decodedToken = jwtService.decode(token)
        const dbUser = await mongoDTO.findOne({ email: decodedToken.email })
        res.status(200).send(
            dbUser
        )
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports.refresh_token = async (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
    try {
        if (!token) {
            return res.status(401).send({ message: "Unathorized" })
        }
        const decodedToken = jwtService.decode(token)
        const refreshToken = jwtService.sign({ email: decodedToken.email })
        res.status(200).send({ refreshToken })
    } catch (error) {
        console.log(error)
    }
}