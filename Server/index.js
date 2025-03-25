const express = require("express")
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
const customerRoute = require("./Route/customerRoute")
require("dotenv").config();


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/uploads"  , express.static("uploads"))


mongoose.connect(process.env.DB_CONNECT)
.then(()=>{
    console.log("Database Connect")
})


app.use("/customer",customerRoute)

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("server on")
})

