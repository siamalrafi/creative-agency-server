const express = require("express");
const app = express();
const cors = require("cors");


// middleware
app.use(express.json());
app.use(cors());



// get all products
// app.use("/api/v1/product", productRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Creative Server!')
})


module.exports = app;