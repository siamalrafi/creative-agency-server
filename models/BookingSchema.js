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
        unique: [true, "Please provide a unique email address."],
    },
    serviceName: {
        type: String,
        required: [true, "Please provide a service name"],
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative."]
    }
}, {
    timestamps: true,
});



const Booking = mongoose.model('BookingCollection', bookingSchema);


// export Booking
module.exports = Booking;