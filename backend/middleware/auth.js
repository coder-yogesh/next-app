const jwt = require('jsonwebtoken');

const JWT_SECRET = "afc257639efaf5f0441c39135dd5e9b12e71e683627b1df807942dec8d213763";

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });
        req.user = decoded;
        next();
    });
}