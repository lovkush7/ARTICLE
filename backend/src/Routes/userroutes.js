import {Router }from "express";
import app from "../controllers/login.js";
import loginvalidation from "../middlewares/loginvalidation.js";
import signup from "../controllers/signup.js";
import signupvalidation from "../middlewares/signupvalidation.js";

const router = Router();
router.post("/login",loginvalidation,app);
router.post("/signup",signupvalidation,signup)

export default router;