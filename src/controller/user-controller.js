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
      try{
        const users=await User.find({})
        if(users.length===0){
           return res.status(404).send("User not found")
        }
        return res.status(200).send(users)
    }catch(err){
        return res.status(400).send({error:err.message})
    }
}
// user by email
const getUser=async(req,res)=>{
    const  email=req.body.emailId;
    try{
        const user=await User.findOne({emailId:email})
        if(!user){
           return res.status(404).send("User not found")
        }
        return res.status(200).send(user)
    }catch(err){
        return res.status(400).send({error:err.message})
    }
}

const deleteUser=async (req,res)=>{
  const userId=req.body.userId;
  try{
     await User.findByIdAndDelete(userId)
     return res.status(200).send("user deleted successfully")
  }catch(err){
     return res.status(400).send({error:err.message})
  }
}

const updateUser=async(req,res)=>{
    const userId=req.body.userID;
    const data=req.body;
    try{
     await User.findByIdAndUpdate({_id:userId},data,{runValidators:true})
     return res.status(200).send("user updated successfully")
    }catch(err){
     return res.status(400).send({error:err.message})
  }   
}


module.exports={signUp,getUser,feed,deleteUser,updateUser}