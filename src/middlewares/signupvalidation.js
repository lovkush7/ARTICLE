import joi from "joi";

const signupvalidation = (req,res,next)=>{
    try{
     const schema = joi.object({
       name:joi.string().min(3).max(12).required(),
       email:joi.string().email().required(),
       password:joi.string().min(3).max(12).required()
     });
     
     const {error}= schema.validate(req.body);
     if(error){
      return  res.json({success:false,message:error.details[0].message})
     }
     next();

    }catch(err){
        console.error("the error is "+err)
    }
}
export default signupvalidation;