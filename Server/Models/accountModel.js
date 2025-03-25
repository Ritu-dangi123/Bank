const mongoose = require("mongoose");

const account = new mongoose.Schema({

     custId  : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"costumer"
     },
     account : Number,
     status : String,
     date : {
        type : Date,
        default : Date.now
     } 
})

module.exports = mongoose.model("account",account)