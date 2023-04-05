const Services = require("../models/ServicesSchema.js")

// create a new Service
exports.createServicesHelper = async (data) => {
    const product = await Services.create(data);
    return product;
};


// get all services --------
exports.getAllServicesHelper = async () => {
    const result = await Services.find();
    return result;
};


// get a service by categories -------
exports.getServicesByCategoriesHelper = async (categories) => {
    const result = await Services.find({ categories: categories });
    return result;
}