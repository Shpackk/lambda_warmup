const { MongoClient } = require('mongodb')
const url = process.env.MONGO_URI
const client = new MongoClient(url)
const dbName = 'logs'

async function connect() {
    await client.connect()
    console.log('Connected Mongo')
    const db = client.db(dbName)
    const collection = db.collection('auth')
    return collection
}

module.exports = { connect }
