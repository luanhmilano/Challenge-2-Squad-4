const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to database')
    } catch (err) {
        console.log('Failed to connect to database')
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDb