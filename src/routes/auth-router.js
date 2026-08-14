const { Router } = require("express");
const { signUp, login,logout } = require("../controller/auth.controller");

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout",logout)
module.exports = authRouter;
