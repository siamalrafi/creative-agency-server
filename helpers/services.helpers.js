const Services = require("../models/ServicesSchema.js")

exports.createServicesHelper = async (data) => {
    const product = await Services.create(data);
    return product;
};
