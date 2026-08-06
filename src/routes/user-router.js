const {Router} =require("express");
const {signUp,getUser,feed,deleteUser,updateUser}=require("../controller/user-controller")

const userRouter=Router();

userRouter.post("/signup",signUp)
userRouter.get("/",getUser);
userRouter.get("/feed",feed);
userRouter.delete("/",deleteUser);
userRouter.patch("/",updateUser)

module.exports= userRouter