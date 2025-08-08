const mongoose= require("mongoose");
require("dotenv").config();
const bcrypt= require("bcrypt");
const User= require("../models/user");

const logout = (req, res) => {
    // Nëse do të përdorësh cookie në të ardhmen
    res.clearCookie("token");

    // Mesazh për klientin që token-in s’duhet ta përdorë më
    res.status(200).json({ message: "Logged out successfully. Please discard your token." });
};

module.exports = logout;
