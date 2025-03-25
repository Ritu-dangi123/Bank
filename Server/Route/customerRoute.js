const express = require("express");
const route = express.Router();
const customerControllers = require("../Controllers/customerControllers")
const ammountControllers = require("../Controllers/ammountController")
const upload = require("../Midllewere/multer")

route.post("/registration",upload.single("photo"),customerControllers.registration)
route.post("/login",customerControllers.login)
route.post("/submitcase",ammountControllers.submitcase)
route.post("/withdrwacase",ammountControllers.withdrwacase)
route.get("/balanceinqury",ammountControllers.balanceinqury)
route.post("/ministatement",ammountControllers.ministatement)
route.post("/emailotp",ammountControllers.emailotp)

module.exports = route