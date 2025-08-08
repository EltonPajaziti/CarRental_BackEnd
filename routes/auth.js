const express= require("express");
const login= require("../controller/login");
const signup= require("../controller/signup");
const router=express.Router();


router.post("/register", signup);
router.post("/login",login);

module.exports=router;