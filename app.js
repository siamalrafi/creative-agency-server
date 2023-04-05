const express = require("express");
const app = express();
const cors = require("cors");
const ServicesRoute = require("./routes/v1/services.route");


// middleware
app.use(express.json());
app.use(cors());



// get all products
app.use("/api/v1/services", ServicesRoute)

app.get('/', (req, res) => {
    res.send('Welcome to Creative Server!')
})


module.exports = app;