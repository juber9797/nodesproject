const mongoose = require('mongoose')

const data = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: String,
        required: true
    }
})

const Data = mongoose.model('Data', data)
module.exports = Data