const { Router } = require("express");
const {
  getProfile,
  feed,
  deleteUser,
  editProfile
} = require("../controller/profile.controller");
const { userAuth } = require("../middleware/auth");

const profileRouter = Router();

profileRouter.get("/", userAuth, getProfile);
profileRouter.patch("/",userAuth,editProfile)
profileRouter.get("/feed", feed);
profileRouter.delete("/", deleteUser);

module.exports = profileRouter;
