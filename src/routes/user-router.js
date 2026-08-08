const {Router} =require("express");
const {signUp,login,getProfile,getUser,feed,deleteUser,updateUser}=require("../controller/user-controller")
const {userAuth}=require("../middleware/auth")

const userRouter=Router();

userRouter.post("/signup",signUp)
userRouter.post("/login",login)
userRouter.get("/profile",userAuth,getProfile)
userRouter.get("/",getUser);
userRouter.get("/feed",feed);
userRouter.delete("/",deleteUser);
userRouter.patch("/",updateUser)

module.exports= userRouter