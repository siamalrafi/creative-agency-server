const UserModel = require("../models/UserSchema");



// create a new User ---
exports.createUserHelpers = async (data) => {
    const result = await UserModel.create(data);
    return result;
};







