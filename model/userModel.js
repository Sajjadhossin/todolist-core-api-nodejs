const mongoose = require("mongoose")
const {Schema} = mongoose

let userSchema = new Schema({
    userName: {
        type: 'string',
        required: true,
        unique: true
    },

    password: {
        type: 'string',
        required: true,
    }

})

module.exports = mongoose.model("User", userSchema)