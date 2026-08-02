const mongoose=require("mongoose");

const DB_URL="mongodb+srv://vinniveerani21_db_user:dRnscYr3kfDw1800@namestenode.azouzwh.mongodb.net/namestedev?appName=NamesteNode"

const connectDB= async ()=>{
    await mongoose.connect(DB_URL);
}

module.exports=connectDB