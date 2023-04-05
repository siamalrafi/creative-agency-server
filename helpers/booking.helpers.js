const Booking = require("../models/BookingSchema");


exports.createBookingHelper = async (data) => {
    const result = await Booking.create(data);
    return result;
};




