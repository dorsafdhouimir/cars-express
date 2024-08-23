var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    email : {
        require :true,
        type : String
    },
    password : {
        require :true,
        type : String
    },
    age :Number
})


var user = new mongoose.model("user",userSchema)


module.exports = user