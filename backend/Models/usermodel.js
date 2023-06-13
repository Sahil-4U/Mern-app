const mongoose=require("mongoose");
const Schema=mongoose.Schema;
// creating schema
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    }
},{timestamps:true});

// creating model 
const User=mongoose.model('User',userSchema);
// exporting model
module.exports=User;

// if we want to do this in single line we can also do it like
// module.exports=mongoose.model("User",userSchema);