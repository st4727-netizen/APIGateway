const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ["Card", "PayPal", "Transfer"],
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending"
    },

    transactionId: {
        type: String,
        required: true,
        unique: true
    },

    paymentDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Payment", paymentSchema);