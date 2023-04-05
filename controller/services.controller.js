const Services = require("../models/Services");


// Create a new Service
exports.createServices = async (req, res, next) => {
    try {
        // save or create a new Services
        const result = await createServicesService(req.body);

        // const Services = new Services(req.body);
        // const result = await Services.save();

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}







