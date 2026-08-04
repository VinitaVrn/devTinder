const user=require("./models/user-model.js")

const signUp= async(req,res)=>{
   const data=req.body;
   const  user=new user(data)
   try{
    await user.save();
    res.send("user added successfully")
   }catch(err){
    res.status(400).send(err.message)    
   }
    res.status(200).send("data saved ")
}


module.exports=signUp