const mongoose = require("mongoose")

const customer = new mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    acnumber:{
        type:String,
    }
})

module.exports = mongoose.model("customer",customer)