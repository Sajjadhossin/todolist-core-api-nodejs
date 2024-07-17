const mongoose = require("mongoose");
const {Schema} = mongoose

let todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Todo", todoSchema);