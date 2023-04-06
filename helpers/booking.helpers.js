const Booking = require("../models/BookingSchema");


// create a new Booking helpers ----
exports.createBookingHelper = async (data) => {
    const result = await Booking.create(data);
    return result;
};

// get all bookings helper ------
exports.getBookingsHelpers = async () => {
    const result = await Booking.find();
    return result;
};





