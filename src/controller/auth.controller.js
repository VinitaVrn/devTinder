const User = require("../models/user-model");
const bcrypt = require("bcrypt");

// const dotenv =require("dotenv")
// dotenv.config();

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

 
    const isPasswordValid = await userData.verifyPassword(password)

    if (!isPasswordValid) {
      
      return res.status(400).send("Invalid Credentials");
    }

    const token = await userData.getJWT()
    res.cookie("token", token,{httpOnly:true});
    res.status(200).send("Login Successfull");
  } catch (err) {
    res.status(500).send("Login failed:", err.message);
    console.log(err)
  }
};


const logout= async (req,res)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now())
    });
   return  res.status(200).json({"message":"logout successfully"})
}

const forgetPassword=async(req,res)=>{

}

const resetPassword=async(req,res)=>{
  
}

module.exports={login,signUp,logout}
