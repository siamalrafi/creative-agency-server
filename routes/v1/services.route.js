const express = require("express");
const router = express.Router();
const servicesController = require("../../controller/services.controller");


router.route("/")
    .post(servicesController.createServices)
    .get(servicesController.getServices)


router.route("/:categories")
    .get(servicesController.getServicesByCategories)


module.exports = router;