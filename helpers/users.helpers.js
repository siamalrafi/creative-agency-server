const UserModel = require("../models/UserSchema");



// create a new User ---
exports.createUserHelpers = async (data) => {
    const result = await UserModel.create(data);
    return result;
};



// get all users -------
exports.getUsersHelpers = async()=>{
    const result = await UserModel.find();
    return result
};



