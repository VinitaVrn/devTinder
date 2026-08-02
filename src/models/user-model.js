const {Schema,model} =require("mongoose")

const userSchema= new Schema({
    firstName:{
        type: String,
    },
      LastName:{
        type: String,
    },
      emailID:{
        type: String,
    },
      password:{
        type: String,
    },
      age:{
        type: Number,
    },
      gender:{
        type: String,
    },
})

const user=mongoose.model("user",userSchema)

module.exports=user