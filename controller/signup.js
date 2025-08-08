const mongoose=require("mongoose");

const User= require("../models/user");

const express=require("express");

const bcrypt= require("bcrypt");

const {createSecretToken}= require("../auth/token");

const signup= async (req,res)=>{
    try{
        
        const oldUser= User.findOne({username:req.body.username});
        if(oldUser){
            res.status(409).json({message: "User already exists! Please Log in!"});
        }

        const salt=10;
        const hashedPassword= bcrypt.hash(req.body.password,salt);
        const newUser= new User(
            {
             fullname:req.body.fullname,
             email: req.body.email,
             username: req.body.email,
             password:hashedPassword,
            }
        );

        const user= await newUser.save();
        const token= createSecretToken(user._id);

        res.cookie("token", token,{
            path:"/",
            expires: new Date(Date.now()+ 86400),
            secure: true,
            httpOnly:true
        });
        console.log("COOKIE set successfully!");


        
    }catch(err){
        // console.log("Something went wrong!", err);
        res.status(500).json({message:err});
    };
};


module.exports=signup;

