const Order = require("../schemas/order.schema");

// CREATE
exports.createOrder = async (req, res) => {
    try {

        const order = await Order.create(req.body);

        res.status(201).json({
            success: true,
            data: order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// READ ALL
exports.getOrders = async (req, res) => {

    try {

        const orders = await Order.find()
            .populate("user")
            .populate("products.product");

        res.json({
            success: true,
            data: orders
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// READ ONE
exports.getOrderById = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id)
            .populate("user")
            .populate("products.product");

        if (!order)
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        res.json({
            success: true,
            data: order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// UPDATE
exports.updateOrder = async (req, res) => {

    try {

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!order)
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        res.json({
            success: true,
            data: order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE
exports.deleteOrder = async (req, res) => {

    try {

        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order)
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        res.json({
            success: true,
            message: "Order deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};