const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");


router.route("/")
    .post(userController.createUser)
    .get()









module.exports = router;