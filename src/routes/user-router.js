const {Router} =require("express")
const {signUp}=require("./controller/user-controller")

const userRouter=Router();

userRouter.post("/",signUp)