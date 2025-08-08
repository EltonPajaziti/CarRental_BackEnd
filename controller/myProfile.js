const User = require("../models/user");

const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("fullname username email");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = myProfile;
