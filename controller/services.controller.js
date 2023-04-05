const { createServicesHelper } = require("../helpers/services.helpers.js");


// Create a new Service
exports.createServices = async (req, res, next) => {
    try {
        // save or create a new Services
        console.log(req.body);
        const result = await createServicesHelper(req.body);

        // const Services = new Services(req.body);
        // const result = await Services.save();

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: "result"
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};


// get all services
exports.getServices = async (req, res, next) => {
    try {
        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: "result"
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}









