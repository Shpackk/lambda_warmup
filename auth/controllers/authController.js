const jwtService = require('../services/jwtService')
const mongoDTO = require('../DTO/userDbDTO')

module.exports.sign_up = async (req, res, next) => {
    const user = req.body
    try {
        await mongoDTO.createUser(user)
        res.status(201).send({
            message: "You can login now!"
        })
    } catch (error) {
        next(error)
    }
}

module.exports.login = async (req, res, next) => {
    const user = req.body
    try {
        const dbUser = await mongoDTO.findOne({ email: user.email })
        if (!dbUser) {
            throw ("User Not Found")
        }
        const token = jwtService.sign(user)
        res.status(201).send({
            token
        })
    } catch (error) {
        next(error)
    }
}

