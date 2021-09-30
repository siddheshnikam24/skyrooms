const mongoose = require('mongoose');

var mongoDBURL = 'mongodb+srv://siddhesh:siddhesh123@cluster0.69h5q.mongodb.net/skyrooms'


mongoose.connect(mongoDBURL);

var dbconnect = mongoose.connection

dbconnect.on('error', () => {
    console.log('MongoDB connection failed.');
})

dbconnect.on('connected', () => {
    console.log('MongoDB connected successfully.');
})

module.exports = mongoose;
