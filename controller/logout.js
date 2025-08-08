const mongoose= require("mongoose");
require("dotenv").config();
const bcrypt= require("bcrypt");
const User= require("../models/user");

const logout = (req, res) => {
   
    res.clearCookie("token");

    
    res.status(200).json({ message: "Logged out successfully. Please discard your token." });
};

module.exports = logout;
