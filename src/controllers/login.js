import generatetoken from "../lib/jwt.js";
import usermodel from "../models/usermodel.js";
import bcrypt from "bcryptjs"

const login = async(req,res)=>{
try{
    const{email,password}=req.body;

    const user = await usermodel.findOne({email});

    if(!user){
        return res.status(400).json({success:false,message:"user dosent exist firstly signup"})
    }
    const isequalpass = await bcrypt.compare(password,user.password);

    if(!isequalpass){
      return res.status(400).json({success:false,message:"check the password once"})
    }
      const token = generatetoken(user._id,res);
      console.log(token);
  res.status(200).json({success:true
    ,message:'successfully login',
     email,
     name:user.name,
      token
})


}catch(err){
    console.error("the error is "+err);
}


};

export default login;

