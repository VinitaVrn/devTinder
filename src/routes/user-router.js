const {Router} =require("express");
const {signUp,getUsers}=require("../controller/user-controller")

const userRouter=Router();

userRouter.post("/signup",signUp)
userRouter.get("/",getUsers)

module.exports= userRouter