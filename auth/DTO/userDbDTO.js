const mongo = require('../db/mongoConnection').connect()

module.exports.findOne = async (email) => {
    try {
        return await (await mongo).findOne(email)
    } catch (error) {
        throw error
    }
}

module.exports.createUser = async (user) => {
    try {
        return await (await mongo).insertOne(user)
    } catch (error) {
        throw error
    }
}