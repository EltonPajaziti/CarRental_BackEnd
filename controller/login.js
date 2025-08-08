const mongoose= require("mongoose");
require("dotenv").config();
const bcrypt= require("bcrypt");
const User= require("../models/user");

const {createSecretToken}= require("../auth/token");

const login= async (req,res)=>{
try{
    const {username, password}= req.body;
    const user= await User.findOne({username});
    if(!(user && ( await bcrypt.compare(password,user.password)))){
        return res.status(400).json({message: "Invalid Credentials!"});
    }

    const token= createSecretToken(user._id);
    res.cookie("token", token,{
        path:"/",
        expires: new Date(Date.now() + 86400000),
    });

    res.json({token});
}catch(err){
    res.status(500).json({message:err});
};
};

module.exports=login;