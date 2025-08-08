const mongoose= require('mongoose');

const env= require("dotenv");

env.config();

const dbconnection= async ()=>{
      mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("DB connection successfully!"))
    .catch((err)=>{console.error(err)});
};

module.exports=dbconnection;