const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength:3,
    maxlength:50,
  },
  LastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid email address:"+value);
      }
    }
  },
  password: {
    type: String,
    required: true,
    validator(value){
      if(!validator.isStrongPassword(value)){
         throw new Error("keep strong password:"+value);
      }
    }
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("gender data not valid")
      }
    }
  },
  photoUrl: {
    type: String,
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid Url")
      }
    }
  },
  about: {
    type: String,
    default: "this is default about of user",
  },
  skills: {
    type: [String],
  },
},{
  timestamps:true
});

const User = mongoose.model("user", userSchema);

module.exports = User;
