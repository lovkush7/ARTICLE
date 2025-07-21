import joi from "joi";

const loginvalidation = (req,res,next)=>{
    try{
const schema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(3).max(12).required()
});
const {error}=schema.validate(req.body);
if (error ){
    return res.status(400).json({success:false,messages:"due to error from requested body"})
}
next();

    }catch(err){
        console.error("the error is "+err);
    }
}
export default loginvalidation;