import express from "express";
import mongoose from "mongoose"
import "dotenv/config.js";
import router from "./Routes/userroutes.js";
import cors from "cors"
// import cookieParser from "cookies-parser"
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use("/auth",router);


app.listen(8000,async()=>{
    console.log("the server is running");
    try{
  await mongoose.connect(process.env.MONGO_CONN);
   console.log("connected to db");
    }catch(err){
        console.error("the error is"+err);
        
    }
})