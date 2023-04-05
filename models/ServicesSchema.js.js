const mongoose = require("mongoose");


const servicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative."]
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["available", "not-available", "discontinued"],
            massage: "status value can't be others."
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
    },
    categories: [{
        type: String,
        required: true,
        enum: {
            values: ["Website Design & Development", "Digital Marketing", "Web & Mobile design", "Branding & Design",
                "Content Creation", "UX/UI Design"],
            massage: "categories value can't be others."
        },
        _id: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
})


// do something after inserting data into database
servicesSchema.pre("save", function (next) {
    console.log("after product inserted");
    if (this.quantity === 0) {
        this.status = "out-of-stack";
    }
    next();
});

servicesSchema.methods.logger = function () {
    console.log(`Data is ${this.name}`);
}



const Services = mongoose.model('ServicesCollection', servicesSchema)



// export Services
module.exports = Services;
