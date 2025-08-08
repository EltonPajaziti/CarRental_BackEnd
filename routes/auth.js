const express= require("express");
const login= require("../controller/login");
const signup= require("../controller/signup");
const checkAuth= require("../auth/checkauth");

const myProfile= require("../controller/myProfile");
const router=express.Router();


router.post("/register", signup);
router.post("/login",login);
router.get("/my-profile",checkAuth, myProfile); // me JWT


module.exports=router;