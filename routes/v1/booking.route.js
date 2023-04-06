const express = require("express");
const router = express.Router();
const bookingController = require("../../controller/booking.controller");



router.route("/")
    .post(bookingController.createBooking)
    .get(bookingController.getBookings)

router.route("/:id")
    .delete(bookingController.deleteBooking)


module.exports = router;