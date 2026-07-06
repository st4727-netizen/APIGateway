const Payment = require("../schemas/payment.schema");

// CREATE
exports.createPayment = async (req, res) => {

    try {

        const payment = await Payment.create(req.body);

        res.status(201).json({
            success: true,
            data: payment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// READ ALL
exports.getPayments = async (req, res) => {

    try {

        const payments = await Payment.find()
            .populate("order");

        res.json({
            success: true,
            data: payments
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// READ ONE
exports.getPaymentById = async (req, res) => {

    try {

        const payment = await Payment.findById(req.params.id)
            .populate("order");

        if (!payment)
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });

        res.json({
            success: true,
            data: payment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// UPDATE
exports.updatePayment = async (req, res) => {

    try {

        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!payment)
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });

        res.json({
            success: true,
            data: payment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE
exports.deletePayment = async (req, res) => {

    try {

        const payment = await Payment.findByIdAndDelete(req.params.id);

        if (!payment)
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });

        res.json({
            success: true,
            message: "Payment deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};