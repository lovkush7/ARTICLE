import {Router }from "express";
import app from "../controllers/login.js";
import loginvalidation from "../middlewares/loginvalidation.js";
import signup from "../controllers/signup.js";
import signupvalidation from "../middlewares/signupvalidation.js";
import login from "../controllers/login.js";
import logout from "../controllers/logout.js";

const router = Router();

router.post("/signup",signupvalidation,signup);
router.post("/login",loginvalidation,login);
router.post ("/logout",logout);

export default router;