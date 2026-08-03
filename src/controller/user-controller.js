const user=require("./models/user-model.js")

const signUp= async(req,res)=>{
   const {firstName, lastName, emailId, password}=req.body;
    res.status(200).send("data saved ")
}


module.exports=signUp