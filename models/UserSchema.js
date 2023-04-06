const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },
    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
        unique: [true, "Please provide a unique email address."],
    },
    role: {
        type: String,
        required: [true, "Please provide a role"],
        trim: true, // without spaces
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});





const UserModel = mongoose.model('UserCollection', userSchema);


// export UserModel
module.exports = UserModel;
