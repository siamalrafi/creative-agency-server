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

// delete a booking helper ------
exports.deleteBookingHelper = async (id) => {
    const result = await Booking.deleteOne({ _id: id });
    return result;
}

// getBookingsByEmailHelper ---
exports.getBookingsByEmailHelper = async (email) => {
    const result = await Booking.find({ email: email });
    return result;
}
