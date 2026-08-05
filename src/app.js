const express= require("express");
const connectDB=require("./config/db");
const userRouter= require("./routes/user-router")

const app=express()

const PORT=7777

app.use(express.json())
app.use("/user",userRouter)

// app.use("/",(req,res)=>{
//     res.send("hello tinder")
// })

app.listen("7777", async()=>{
    try{
      await connectDB();
      console.log("DB connected")
      console.log("server is running on port",PORT)
    
    }catch(err){
         console.error(err.message)
    }
})