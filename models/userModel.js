const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    username:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true, 
        max: 30, 
        unique: true
    },
    password: {
        type: String,
        required: true, 
        min: 6,
        max: 16,
        unique: true
    },
    profilePicture: {
        type: String,
        default: ""
    }, 
    coverPicture: {
        type: String, 
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("Users", userSchema)