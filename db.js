const mongoose = require('mongoose');

var mongoDBURL = 'mongodb+srv://sujeet:sujeet123@cluster0.tsmr5.mongodb.net/skyrooms'


mongoose.connect(mongoDBURL)

var dbconnect = mongoose.connection

dbconnect.on('error', () => {
    console.log('MongoDB connection failed.')
})

dbconnect.on('connected', () => {
    console.log('MongoDB connected successfully.')
})

module.exports = mongoose