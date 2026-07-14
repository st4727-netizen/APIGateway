const express = require("express");

const router = express.Router();

const {
    createCart,
    getCarts,
    getCartById,
    updateCart,
    deleteCart
} = require("../controllers/cart.controller");

router.post("/cart", createCart);
router.get("/cart", getCarts);
router.get("/cart/:id", getCartById);
router.put("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCart);

module.exports = router;