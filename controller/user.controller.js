const { createUserHelpers } = require("../helpers/users.helpers");

exports.createUser = async (req,res,next) => {
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







