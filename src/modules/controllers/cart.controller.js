const Cart = require("../schemas/cart.schema");

// CREATE
exports.createCart = async (req, res) => {

    try {

        const cart = await Cart.create(req.body);

        res.status(201).json({
            success: true,
            data: cart
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// READ ALL
exports.getCarts = async (req, res) => {

    try {

        const carts = await Cart.find()
            .populate("user")
            .populate("products.product");

        res.json({
            success: true,
            data: carts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// READ ONE
exports.getCartById = async (req, res) => {

    try {

        const cart = await Cart.findById(req.params.id)
            .populate("user")
            .populate("products.product");

        if (!cart)
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });

        res.json({
            success: true,
            data: cart
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// UPDATE
exports.updateCart = async (req, res) => {

    try {

        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!cart)
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });

        res.json({
            success: true,
            data: cart
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE
exports.deleteCart = async (req, res) => {

    try {

        const cart = await Cart.findByIdAndDelete(req.params.id);

        if (!cart)
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });

        res.json({
            success: true,
            message: "Cart deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};