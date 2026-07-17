const jwt = require("jsonwebtoken");
require("dotenv").config();

const token = jwt.sign(
    {
        app: "CleaningStoreAPI",
        type: "application"
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "365d"
    }
);

console.log("\nApplication Token:\n");
console.log(token);