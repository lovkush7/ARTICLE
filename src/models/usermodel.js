import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
}
,{timestamps:true}
);
const usermodel = new mongoose.model("userauth",userschema);

export default usermodel;