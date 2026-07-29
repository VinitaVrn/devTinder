const express= require("express")

const app=express()

const PORT=7777

app.use("/",(req,res)=>{
    res.send("hello tinder")
})

app.listen("7777",()=>{
    console.log("server is running on port",PORT)
})