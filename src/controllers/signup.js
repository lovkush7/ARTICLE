import usermodel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import generatetoken from "../lib/jwt.js";

const signup =async(req,res)=>{
    try{
        const {name,email,password} =req.body;
        console.log("req.body",req.body)

       const user= await usermodel.findOne({email});

       if(user){
        return res.status(404).json({success:false,message:"user already exist you can login"});
       }
        
       const model = new usermodel({name,email,password});
       model.password= await bcrypt.hash(password,10);
     await  model.save();

       if(model){
   //gnerate jwt
    const token=  generatetoken(model._id,res);
    await model.save();
    console.log(token)
    res.json({
        success:true,
        _id:model._id,
        name:model.name,
        email:model.email
    })
       }else{
         return res.status(402).json({success:false,message:"internal issue"});
       }

    }catch(err){
        console.error("the error is "+err);
    }
}

export default signup;