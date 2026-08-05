const User=require("../models/user-model")

const signUp= async(req,res)=>{
   const data=req.body;
   const  user=new User(data)
   console.log("user")
   try{
    await user.save();
    console.log("user saved")
    return res.send("user added successfully")
   }catch(err){
   return res.status(400).send(err.message)    
   }
   
}

const feed=async(req,res)=>{

}
// user by email
const getUsers=async(req,res)=>{
    const  email=req.body.emailId;
    try{
        const users=await User.find({emailId:email})
        if(users.length===0){
           return res.status(404).send("User not found")
        }
        return res.status(200).send(users)
    }catch(err){
        return res.status(400).send({error:err.message})
    }
}


module.exports={signUp,getUsers}