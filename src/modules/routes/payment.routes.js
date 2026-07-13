const express = require("express");

const router = express.Router();

const {
    createPayment,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment
} = require("../controllers/payment.controller");

router.post("/payment", createPayment);
router.get("/payment", getPayments);
router.get("/payment/:id", getPaymentById);
router.put("/payment/:id", updatePayment);
router.delete("/payment/:id", deletePayment);

module.exports = router;