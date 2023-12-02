const mongoose = require("mongoose")

const userdetain = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    ProfileImg: {
        type: String,
        required: true
    }
})

const productCollection = mongoose.model("userdetain",userdetain)

module.exports = productCollection;