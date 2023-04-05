const { createServicesHelper, getAllServicesHelper, getServicesByIdHelper, getServicesByCategoriesHelper } = require("../helpers/services.helpers.js");


// Create a new Service
exports.createServices = async (req, res, next) => {
    try {
        // save or create a new Services
        console.log(req.body);
        const result = await createServicesHelper(req.body);

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
};


// get all services
exports.getServices = async (req, res, next) => {
    try {
        const result = await getAllServicesHelper();

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
};







// get a service by id
exports.getServicesByCategories = async (req, res, next) => {
    try {

        console.log(req.params.categories);

        const result = await getServicesByCategoriesHelper(req.params.categories);

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









