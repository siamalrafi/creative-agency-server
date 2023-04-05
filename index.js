const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// DATABASE PASSWOARD
/*
 //  creative-agency
// j3d6oXDPUkVZalcf
 */



// mongoose.connect('mongodb://localhost:27017/').then(() => {
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("`Database Connection successfully established`".red.bold);
});




// server running on port 
const port = process.env.PORT || 8080;



app.listen(port, () => {
    console.log(`Creative Server app listening on port ${port}`.bgRed)
})