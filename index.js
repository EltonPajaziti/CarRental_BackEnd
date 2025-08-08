const express= require("express");

const Connection= require("./database/db");

const authRoute=require("./routes/auth");
const carRoute=require("./routes/cars");
const bodyParser= require("body-parser");
const cookieParser = require ("cookie-parser");
const app=express();


const PORT=8000;


app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


Connection();


app.use("/api", authRoute);
app.use("/api",carRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
