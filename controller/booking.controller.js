const { createBookingHelper, getBookingsHelpers, deleteBookingHelper, getBookingsByEmailHelper } = require("../helpers/booking.helpers");



exports.createBooking = async (req, res, next) => {
    try {
        // save or create a new booking
        const result = await createBookingHelper(req.body);

        res.status(200).json({
            status: 'success',
            massage: "Booking inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};



// get all bookings --------
exports.getBookings = async (req, res, next) => {
    try {
        const result = await getBookingsHelpers();

        res.status(200).json({
            status: 'success',
            massage: "get Bookings Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get Bookings Error",
            error: error.message
        })
    }
};

exports.deleteBooking = async (req, res, next) => {
    try {
        const result = await deleteBookingHelper(req.params.id);

        res.status(200).json({
            status: "success",
            massage: "delete Bookings Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "delete Bookings Error",
            error: error.message
        })
    }
};


// getBookingsByEmail ----
exports.getBookingsByEmail = async (req, res, next) => {
    try {
        console.log(req.params.email);
        const result = await getBookingsByEmailHelper(req.params.email)
        res.status(200).json({
            status: "success",
            massage: "delete Bookings Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "delete Bookings Error",
            error: error.message
        })
    };
};
