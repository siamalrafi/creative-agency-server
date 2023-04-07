const { createUserHelpers, getUsersHelpers, deleteUserHelpers, getUserByEmailHelper } = require("../helpers/users.helpers");

exports.createUser = async (req, res, next) => {
    try {
        const result = await createUserHelpers(req.body);

        res.status(200).json({
            status: "success",
            massage: "User created successfully.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "user created error",
            error: error.message
        })
    }
};


exports.getUsers = async (req, res, next) => {
    try {
        const result = await getUsersHelpers();
        res.status(200).json({
            status: "success",
            massage: "get users successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "get users failed",
            error: error.message
        })
    }
};


// delete a user by id ----
exports.deleteUser = async (req, res, next) => {
    try {
        const result = await deleteUserHelpers(req.params.id);

        res.status(200).json({
            status: "success",
            massage: "get users successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "get users failed",
            error: error.message
        })
    }
};


// get user by their email address ---
exports.getUserByEmail = async (req, res, next) => {
    try {
        const user = await getUserByEmailHelper(req.params.email);
        res.status(200).json({
            status: "success",
            massage: "get users successfully.",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "get users failed",
            error: error.message
        })
    }
}

