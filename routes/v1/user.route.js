const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");


router.route("/")
    .post(userController.createUser)
    .get(userController.getUsers)



router.route("/:id")
    .delete(userController.deleteUser)

// get user by there email address ---
router.route("/das/:email")
    .get(userController.getUserByEmail)







module.exports = router;