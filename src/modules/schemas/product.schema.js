const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },

    description: {
        type: String,
        required: true,
        maxlength: 500
    },

    category: {
        type: String,
        required: true,
        enum: [
            "Detergents",
            "Disinfectants",
            "Floor Cleaners",
            "Glass Cleaners",
            "Bathroom Cleaners",
            "Kitchen Cleaners"
        ]
    },

    brand: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    stock: {
        type: Number,
        required: true,
        min: 0
    },

    imageUrl: {
        type: String,
        default: ""
    },

    isPremium: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);