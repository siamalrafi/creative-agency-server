const mongoose = require("mongoose");


const bookingSchema = ({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true, // without spaces
    },
    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
    },
    serviceName: {
        type: String,
        required: [true, "Please provide a service name"],
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative."]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
})


const Booking = mongoose.model('BookingCollection', bookingSchema);


// export Booking
module.exports = Booking;