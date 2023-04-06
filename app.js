const express = require("express");
const app = express();
const cors = require("cors");
const ServicesRoute = require("./routes/v1/services.route");
const BookingRoutes = require("./routes/v1/booking.route");
const UserRoutes = require("./routes/v1/user.route");



// middleware
app.use(express.json());
app.use(cors());



// get all products
app.use("/api/v1/services", ServicesRoute);

// all bookings routes
app.use("/api/v1/bookings", BookingRoutes);

// all user routes
app.use("/api/v1/users", UserRoutes)


app.get('/', (req, res) => {
    res.send('Welcome to Creative Server!')
});


module.exports = app;