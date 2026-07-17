const jwt = require("jsonwebtoken");

const validateAppToken = (req, res, next) => {
    try {
        const token = req.header("app-token");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Application token is required."
            });
        }

        jwt.verify(token, process.env.JWT_SECRET);

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid application token."
        });
    }
};

module.exports = validateAppToken;

