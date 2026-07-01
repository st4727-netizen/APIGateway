const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./src/config/database");

// Importar los modelos
require("./src/modules/schemas/user.schema");
require("./src/modules/schemas/product.schema");
require("./src/modules/schemas/cart.schema");
require("./src/modules/schemas/order.schema");
require("./src/modules/schemas/payment.schema");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5100;

// Conectar a MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Cleaning Store API Running");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});