const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const data = req.body;
  const user = new User(data);
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    await user.save();
    console.log("user saved");
    return res.send("user added successfully");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const login = async (req, res) => {
  const { emailId, password } = req.body;
  try {
    const userData = await User.findOne({ emailId: emailId });
    if (!userData) {
      console.log(userData);
      return res.status(404).send("user not found");
    }

    console.log("Entered password:", password);
    console.log("Stored password:", userData.password);
    const isPasswordValid = await bcrypt.compare(password,userData.password);
    console.log("Password valid:", isPasswordValid);
    if (!isPasswordValid) {
      
      return res.status(400).send("Invalid Credentials");
    }

    const token = jwt.sign({ _id: userData._id }, "DEVyugdyegfyu");
    res.cookie("token", token);
    res.status(200).send("Login Successfull");
  } catch (err) {
    res.status(500).send("Login failed:", err.message);
    console.log(err)
  }
};

const getProfile = async (req, res) => {
  res.send("reading cookie");
};

const feed = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send(users);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};
// user by email
const getUser = async (req, res) => {
  const email = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.body.userId;
  try {
    await User.findByIdAndDelete(userId);
    return res.status(200).send("user deleted successfully");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  const userId = req.body.userID;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    return res.status(200).send("user updated successfully");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  signUp,
  login,
  getProfile,
  getUser,
  feed,
  deleteUser,
  updateUser,
};
