const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const userAuth = async (res, req, next) => {
  try {
    const { token } = req.cookies;
    if(!token){
      return res.send.status(400).send("Unauthorized")
    }
    const decodedObj = await jwt.verify(token, "DEVyugdyegfyu");

    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("user not found");
    }
    req.user=user
    next();
  } catch (error) {
    res.status(400).send("ERROR:", error.message);
  }
};

const adminAuth = async (req, res, next) => {};

module.exports = {
  userAuth,
  adminAuth,
};
