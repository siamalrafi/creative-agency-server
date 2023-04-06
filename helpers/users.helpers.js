const UserModel = require("../models/UserSchema");



// create a new User ---
exports.createUserHelpers = async (data) => {
    const result = await UserModel.create(data);
    return result;
};


// get all users -------
exports.getUsersHelpers = async () => {
    const result = await UserModel.find();
    return result
};


// delete a user by id 
exports.deleteUserHelpers = async (id) => {
    const result = await UserModel.deleteOne({ _id: id });
    return result
};


// get user by their email address --
exports.getUserByEmailHelper = async (email) => {
    console.log(email);
    const result = await UserModel.find({ email: email });
    return result
}