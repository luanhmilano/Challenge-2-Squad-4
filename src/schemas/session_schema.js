const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    capacity: {
        type: Number,
        required: true,
    },
    movieTheater: {
        type: String,
        required: true,   
    },    
    time: {
        type: Date,
        required: true,    
    },
    movie: {
        type: String,
        ref: 'Movie',
        required: true,
    }
    
});

module.exports = mongoose.model('Session', sessionSchema);