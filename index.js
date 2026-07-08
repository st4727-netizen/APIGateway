const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./src/config/database");

// Schemas
require("./src/modules/schemas/user.schema");
require("./src/modules/schemas/product.schema");
require("./src/modules/schemas/cart.schema");
require("./src/modules/schemas/order.schema");
require("./src/modules/schemas/payment.schema");

// Routes
const userRoutes = require("./src/modules/routes/user.routes");
const productRoutes = require("./src/modules/routes/product.routes");
const cartRoutes = require("./src/modules/routes/cart.routes");
const orderRoutes = require("./src/modules/routes/order.routes");
const paymentRoutes = require("./src/modules/routes/payment.routes");

const app = express();

app.use(express.json());

// Conectar a MongoDB
connectDB();

// Ruta principal
app.get("/", (req, res) => {
    res.send("Cleaning Store API Running");
});

// CRUD
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/payments", paymentRoutes);

// Solo escuchar el puerto cuando se ejecuta localmente
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5100;

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

// Exportar para Vercel
module.exports = app;