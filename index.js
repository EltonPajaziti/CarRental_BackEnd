const express= require("express");

const Connection= require("./database/db");

const authRoute=require("./routes/auth");
const bodyParser= require("body-parser");
const cookieParser = require ("cookie-parser");
const app=express();

app.use(express.json());
const PORT=8000;


app.use(cookieParser());
app.use(bodyParser.urlencoded({encoded:true}));


Connection();


app.use("/api", authRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
