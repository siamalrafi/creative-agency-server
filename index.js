const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");



mongoose.connect(process.env.DATABASE).then(() => {
    console.log("database connection established.".black.bold);
});



// server running on port 
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Creative Server app listening on port ${port}`.bgBlue) //available
});

